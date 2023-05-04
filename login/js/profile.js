function logout() {
  clearSession();
  exit;
}
if ( window.history.replaceState ) {
  window.history.replaceState( null, null, window.location.href );
}