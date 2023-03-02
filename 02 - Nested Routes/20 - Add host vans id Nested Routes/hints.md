1. Your /host/vans/:id needs to be the parent route of the other
nested routes /host/vans/:id/pricing and /host/vans/:id/photos.
The detailed info view should show up at /host/vans/:id; in other
words, it should be the default view that shows up near the bottom
when someone clicks on a van from /host/vans.

(SCROLL DOWN TO THE NEXT HINT IF NEEDED)

















































2. You'll need to add an Outlet to the HostVanDetail.jsx file, since 
that's where the nested views will be displayed. The "Details" view,
which is automatically displayed when the user reaches /host/vans/:id,
will be the `index` route, a child of the /host/vans/:id parent route.