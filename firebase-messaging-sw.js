importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
  importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');                      
                                                                                                                
  firebase.initializeApp({                                                                                      
    apiKey: "AIzaSyD7292UEKSrbWmBnnDVuC9n9VXOBFQkmb4",                                                          
    authDomain: "send-alarm-220c3.firebaseapp.com",                                                             
    projectId: "send-alarm-220c3",                                                                              
    storageBucket: "send-alarm-220c3.firebasestorage.app",                                                      
    messagingSenderId: "235927215728",                                                                          
    appId: "1:235927215728:web:23705e0a3f6ac393e81eb5"                                                          
  });                                                                                                           
                                                                                                                
  const messaging = firebase.messaging();                                                                       
                                                            
  messaging.onBackgroundMessage(function(payload) {
    const title   = (payload.notification && payload.notification.title) || '홍쌤 교실';
    const options = {                                                                                           
      body:  (payload.notification && payload.notification.body) || '',
      icon:  'https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg',                              
      tag:   (payload.data && payload.data.tag) || 'hongssam',                                                  
      data:  payload.data || {}                                                                                 
    };                                                                                                          
    return self.registration.showNotification(title, options);
  });                                                                                                           
                                                            
  self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    var url = (event.notification.data && event.notification.data.url)                                          
      || 'https://script.google.com/macros/s/AKfycbyR1whn6f90-kJEAaJg_O34uP8v-KvyEqsRky58idjoxVDS5cWj80p2ScJp6V2
  dnz_0hA/exec';                                                                                                
    event.waitUntil(                                        
      clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(list) {                     
        for (var i = 0; i < list.length; i++) {             
          if (list[i].url.indexOf('script.google.com') > -1 && 'focus' in list[i]) return list[i].focus();      
        }                                                                                                       
        if (clients.openWindow) return clients.openWindow(url);                                                 
      })                                                                                                        
    );                                                      
  });
