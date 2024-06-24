// import { useRegisterSW } from 'virtual:pwa-register/react'

// function PWABadge() {
//   // check for updates every hour
//   const period = 60 * 60 * 1000

//   const {
//     offlineReady: [offlineReady, setOfflineReady],
//     needRefresh: [needRefresh, setNeedRefresh],
//     updateServiceWorker,
//   } = useRegisterSW({
//     onRegisteredSW(swUrl, r) {
//       if (period <= 0) return
//       if (r?.active?.state === 'activated') {
//         registerPeriodicSync(period, swUrl, r)
//       }
//       else if (r?.installing) {
//         r.installing.addEventListener('statechange', (e) => {
//           /** @type {ServiceWorker} */
//           const sw = e.target
//           if (sw.state === 'activated')
//             registerPeriodicSync(period, swUrl, r)
//         })
//       }
//     },
//   })

//   function close() {
//     setOfflineReady(false)
//     setNeedRefresh(false)
//   }

//   return (
//     <>
//       { (offlineReady || needRefresh) &&
//         <div class="toast-container top-0 end-0 p-3">
//           <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
//             <div class="toast-header">
//               <svg class="bd-placeholder-img rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#007aff"></rect></svg>

//               <strong class="me-auto">Progressive Web App</strong>
//               <small class="text-muted">now</small>
//               <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
//             </div>
//             <div class="toast-body">
//               { offlineReady &&
//                   "Die Website funktioniert nun auch offline!"
//               }

//               { needRefresh &&
//                   "Eine neuere Version der Website ist verfügbar!"
//               }
//               <div class="mt-2 pt-2 border-top">
//                 { needRefresh && 
//                   <button className="btn btn-primary btn-sm" onClick={() => updateServiceWorker(true)}>Jetzt aktualisieren!</button> 
//                 }
//                 { offlineReady && 
//                   <button className="btn btn-secondary btn-sm" onClick={() => close()}>Danke für die Info!</button>
//                 }
//               </div>
//             </div>
            
//           </div>
//         </div>
//       }
//     </>
//   )
// }

// export default PWABadge

// /**
//  * This function will register a periodic sync check every hour, you can modify the interval as needed.
//  * @param period {number}
//  * @param swUrl {string}
//  * @param r {ServiceWorkerRegistration}
//  */
// function registerPeriodicSync(period, swUrl, r) {
//   if (period <= 0) return

//   setInterval(async () => {
//     if ('onLine' in navigator && !navigator.onLine)
//       return

//     const resp = await fetch(swUrl, {
//       cache: 'no-store',
//       headers: {
//         'cache': 'no-store',
//         'cache-control': 'no-cache',
//       },
//     })

//     if (resp?.status === 200)
//       await r.update()
//   }, period)
// }
