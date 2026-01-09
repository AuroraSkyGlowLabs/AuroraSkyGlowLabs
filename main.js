// Supabase setup
const supabaseUrl = 'https://coabskvhjoomkpwbpogk.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'; // your anon key
const supabase = supabase.createClient(supabaseUrl, supabaseAnonKey);

// Map setup
const map = L.map("map").setView([43, -88], 4);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
let userMarker = null;

// Helpers
function anonymizeCoord(value, decimals = 1) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}

// Load reports from Supabase
async function loadReports() {
  const { data, error } = await supabase.from('Aurora_reportss').select('*');
  if (error) return console.error(error);

  data.forEach(report => {
    const lat = anonymizeCoord(report.lat);
    const lng = anonymizeCoord(report.lng);
    L.circleMarker([lat, lng], { radius: 7, fillColor: '#39ff14', color: '#000', weight: 1, fillOpacity: 0.9 })
      .addTo(map)
      .bindPopup(`<strong>${report.event}</strong>`);
  });
}

loadReports();

// Realtime updates
supabase
  .channel('public:aurora_reportss')
  .on('postgres_changes', { event: '*', schema: 'public', table: 'Aurora_reportss' }, payload => {
    console.log('New report:', payload.new);
    const report = payload.new;
    const lat = anonymizeCoord(report.lat);
    const lng = anonymizeCoord(report.lng);
    L.circleMarker([lat, lng], { radius: 7, fillColor: '#39ff14', color: '#000', weight: 1, fillOpacity: 0.9 })
      .addTo(map)
      .bindPopup(`<strong>${report.event}</strong>`);
  })
  .subscribe();

// Geolocation
document.getElementById('locate-btn').addEventListener('click', () => {
  if (!navigator.geolocation) return alert('Geolocation not supported');
  navigator.geolocation.getCurrentPosition(pos => {
    const lat = anonymizeCoord(pos.coords.latitude);
    const lng = anonymizeCoord(pos.coords.longitude);
    if (userMarker) userMarker.setLatLng([lat, lng]);
    else userMarker = L.circleMarker([lat, lng], { radius: 8, fillColor: '#ff66b2', color: '#fff', weight: 1, fillOpacity: 0.9 }).addTo(map);
    map.setView([lat, lng], 6);
    document.getElementById('lat').value = lat;
    document.getElementById('lng').value = lng;
    document.getElementById('location-status').textContent = 'Location set';
  });
});

// Form submission
document.getElementById('report-form').addEventListener('submit', async e => {
  e.preventDefault();
  const eventName = document.getElementById('event').value;
  const lat = parseFloat(document.getElementById('lat').value);
  const lng = parseFloat(document.getElementById('lng').value);
  await supabase.from('Aurora_reportss').insert([{ event: eventName, lat, lng, timestamp: Date.now() }]);
  alert('Report submitted!');
  document.getElementById('event').value = '';
});
