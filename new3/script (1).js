
    /*********************
      Demo product database (50 items across categories)
    **********************/
    const PRODUCTS = [
      // mobiles (10)
      {id:1,name:'Redmi Note 12',category:'mobiles',price:10999,image:'Redmi Note 12.png',rating:4.2},
      {id:2,name:'iPhone 12 Mini',category:'mobiles',price:39999,image:'iPhone 12 Mini.webp',rating:4.6},
      {id:3,name:'Samsung Galaxy S20',category:'mobiles',price:29999,image:'Samsung Galaxy S20.png',rating:4.4},
      {id:4,name:'Realme 9 Pro',category:'mobiles',price:14999,image:'Realme 9 Pro.jpg',rating:4.0},
      {id:5,name:'OnePlus Nord CE',category:'mobiles',price:21999,image:'OnePlus Nord CE.png',rating:4.3},
      {id:6,name:'Poco X4',category:'mobiles',price:12999,image:'Poco X4.jpg',rating:4.0},
      {id:7,name:'Moto G Power',category:'mobiles',price:11999,image:'Moto G Power.jpg',rating:3.9},
      {id:8,name:'Nokia G21',category:'mobiles',price:9999,image:'Nokia G21.jpg',rating:3.8},
      {id:9,name:'Asus Zenfone',category:'mobiles',price:25999,image:'Asus Zenfone.jpg',rating:4.1},
      {id:10,name:'Vivo Y75',category:'mobiles',price:15999,image:'Vivo Y75.png',rating:3.9},
      // laptops (8)
      {id:11,name:'Dell Inspiron 14',category:'laptops',price:49999,image:'Dell Inspiron 14.jpg',rating:4.0},
      {id:12,name:'HP Pavilion',category:'laptops',price:54999,image:'HP Pavilion.jpg',rating:4.1},
      {id:13,name:'Lenovo IdeaPad',category:'laptops',price:42999,image:'Lenovo IdeaPad.jpg',rating:3.9},
      {id:14,name:'MacBook Air M1',category:'laptops',price:84999,image:'MacBook Air M1.jpg',rating:4.8},
      {id:15,name:'Asus ROG',category:'laptops',price:99999,image:'Asus ROG.jpg',rating:4.5},
      {id:16,name:'Acer Aspire',category:'laptops',price:39999,image:'Acer Aspire.jpg',rating:3.8},
      {id:17,name:'MSI Thin',category:'laptops',price:75999,image:'MSI Thin.jpg',rating:4.2},
      {id:18,name:'Google Pixelbook',category:'laptops',price:67999,image:'Google Pixelbook.jpg',rating:4.0},
      // headphones (6)
      {id:19,name:'Sony WH-1000XM4',category:'headphones',price:24999,image:'Sony WH-1000XM4.jpg',rating:4.7},
      {id:20,name:'Bose QC45',category:'headphones',price:22999,image:'Bose QC45.jpg',rating:4.6},
      {id:21,name:'JBL Tune 700',category:'headphones',price:6999,image:'JBL Tune 700.jpg',rating:4.0},
      {id:22,name:'Boat Rockerz',category:'headphones',price:1999,image:'Boat Rockerz.jpg',rating:3.7},
      {id:23,name:'Sennheiser HD 560S',category:'headphones',price:10999,image:'Sennheiser HD 560S.jpg',rating:4.3},
      {id:24,name:'Apple AirPods Pro',category:'headphones',price:19999,image:'Apple AirPods Pro.jpg',rating:4.5},
      // watches (6)
      {id:25,name:'Apple Watch SE',category:'watches',price:21999,image:'Apple Watch SE.jpg',rating:4.4},
      {id:26,name:'Samsung Galaxy Watch',category:'watches',price:15999,image:'Samsung Galaxy Watch.jpg',rating:4.2},
      {id:27,name:'Fossil Hybrid',category:'watches',price:6999,image:'Fossil Hybrid.jpg',rating:3.9},
      {id:28,name:'Noise ColorFit',category:'watches',price:2499,image:'Noise ColorFit.jpg',rating:3.8},
      {id:29,name:'Titan Smart',category:'watches',price:5999,image:'Titan Smart.jpg',rating:3.9},
      {id:30,name:'Amazfit GTS',category:'watches',price:8999,image:'Amazfit GTS.jpg',rating:4.1},
      // shoes (6)
      {id:31,name:'Nike Air Max',category:'shoes',price:6999,image:'Nike Air Max.jpg',rating:4.3},
      {id:32,name:'Adidas Running',category:'shoes',price:6499,image:'Adidas Running.jpg',rating:4.2},
      {id:33,name:'Puma Casuals',category:'shoes',price:2999,image:'Puma Casuals.jpg',rating:3.8},
      {id:34,name:'Woodland Boots',category:'shoes',price:4499,image:'Woodland Boots.jpg',rating:4.0},
      {id:35,name:'Bata School',category:'shoes',price:999,image:'Bata School.jpg',rating:3.6},
      {id:36,name:'Skechers Fit',category:'shoes',price:3999,image:'Skechers Fit.jpg',rating:4.0},
      // stationery (6)
      {id:37,name:'Classmate Notebook',category:'stationery',price:99,image:'Classmate Notebook.jpg',rating:4.1},
      {id:38,name:'Pilot Pen',category:'stationery',price:49,image:'Pilot Pen.jpg',rating:4.2},
      {id:39,name:'Apsara Pencils',category:'stationery',price:29,image:'Apsara Pencils.jpg',rating:4.0},
      {id:40,name:'Staples Pack',category:'stationery',price:159,image:'Staples Pack.jpg',rating:3.9},
      {id:41,name:'Sketch Book',category:'stationery',price:199,image:'Sketch Book.jpg',rating:4.3},
      {id:42,name:'Highlighters Set',category:'stationery',price:129,image:'Highlighters Set.jpg',rating:4.0},
      // television (4)
      {id:43,name:'LG 43 inch 4K',category:'television',price:31999,image:'LG 43 inch 4K.jpg',rating:4.3},
      {id:44,name:'Sony Bravia 50',category:'television',price:49999,image:'Sony Bravia 50.jpg',rating:4.6},
      {id:45,name:'Samsung QLED 55',category:'television',price:72999,image:'Samsung QLED 55.jpg',rating:4.7},
      {id:46,name:'Mi 4A 32',category:'television',price:12999,image:'Mi 4A 32.jpg',rating:4.1},
      // extra mixed (4) to reach 50
      {id:47,name:'Portable Charger 10000mAh',category:'mobiles',price:899,image:'Portable Charger 10000mAh.jpg',rating:4.0},
      {id:48,name:'Wireless Charger',category:'mobiles',price:1299,image:'Wireless Charger.jpg',rating:3.9},
      {id:49,name:'HDMI Cable 2m',category:'television',price:399,image:'HDMI Cable 2m.jpg',rating:4.2},
      {id:50,name:'Laptop Sleeve 15"',category:'laptops',price:599,image:'Laptop Sleeve 15.jpg',rating:4.0}
    ];

    const CATEGORIES = ['all','mobiles','laptops','headphones','watches','shoes','stationery','television'];

    /*********************
      State + helpers (localStorage-driven)
    **********************/
    function $(id){return document.getElementById(id)}
    const toast = $('toast');
    function showToast(msg,ttl=2500){toast.textContent = msg; toast.style.display='block'; setTimeout(()=>toast.style.display='none',ttl)}

    function saveJSON(key,val){localStorage.setItem(key,JSON.stringify(val))}
    function loadJSON(key,def){try{return JSON.parse(localStorage.getItem(key))||def}catch(e){return def}}

    // user management
    function currentUser(){return loadJSON('cm_user',null)}
    function setCurrentUser(user){saveJSON('cm_user',user)}
    function logout(){localStorage.removeItem('cm_user'); renderHeader()}

    // wishlists per user email
    function wishlistKey(email){return `cm_wishlist_${email}`}
    function getWishlist(email){return loadJSON(wishlistKey(email),[])}
    function saveWishlist(email,list){saveJSON(wishlistKey(email),list)}

    // orders, comments, reports, messages
    function getOrders(email){return loadJSON(`cm_orders_${email}`,[])}
    function saveOrders(email,orders){saveJSON(`cm_orders_${email}`,orders)}
    function getComments(){return loadJSON('cm_comments',{})}
    function saveComments(obj){saveJSON('cm_comments',obj)}
    function getReports(){return loadJSON('cm_reports',[])}
    function saveReports(arr){saveJSON('cm_reports',arr)}
    function getMessages(){return loadJSON('cm_messages',[])}
    function saveMessages(arr){saveJSON('cm_messages',arr)}

    /*********************
      Rendering
    **********************/
    function renderCategories(){
      const ul = $('categoryList'); ul.innerHTML='';
      CATEGORIES.forEach(cat=>{
        const li = document.createElement('li');
        const btn = document.createElement('button'); btn.textContent = cat[0].toUpperCase()+cat.slice(1);
        btn.dataset.cat = cat; if(cat==='all') btn.classList.add('active');
        btn.addEventListener('click',()=>{document.querySelectorAll('.categories button').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); showCategory(cat)});
        li.appendChild(btn); ul.appendChild(li);
      })
    }

    function renderProductsGrid(targetEl, products){
      const grid = $(targetEl); grid.innerHTML='';
      products.forEach(p=>{
        const div = document.createElement('div'); div.className='product card';
        div.innerHTML = `
          <img src="${p.image}" alt="${p.name}">
          <div style="font-weight:600">${p.name}</div>
          <div class="small">${p.category} · Rating: ${p.rating}</div>
          <div class="meta"><div class="price">₹${p.price}</div><div style="display:flex;gap:8px"><button data-id="${p.id}" class="addCart btn outline">Add to Cart</button><button data-id="${p.id}" class="wishBtn btn">❤ Wishlist</button></div></div>
        `;
        // click to open product detail
        div.querySelector('img').style.cursor='pointer';
        div.querySelector('img').addEventListener('click',()=>openProductDetail(p.id));
        div.querySelector('.addCart').addEventListener('click',()=>addToCart(p.id));
        div.querySelector('.wishBtn').addEventListener('click',()=>handleWishlistAction(p.id));
        grid.appendChild(div);
      })
    }

    function renderHomeSections(){
      // popular grid (top 6 by rating)
      const popular = [...PRODUCTS].sort((a,b)=>b.rating-a.rating).slice(0,6);
      renderProductsGrid('popularGrid',popular);

      // category sections: show first 4 from each category
      const sec = $('categorySections'); sec.innerHTML='';
      CATEGORIES.filter(c=>c!=='all').forEach(cat=>{
        const arr = PRODUCTS.filter(p=>p.category===cat).slice(0,4);
        if(arr.length===0) return;
        const container = document.createElement('div'); container.style.marginTop='12px';
        container.innerHTML = `<h3 style="margin:0 0 8px 0">${cat[0].toUpperCase()+cat.slice(1)}</h3><div class="grid" id="cat-${cat}"></div>`;
        sec.appendChild(container);
        renderProductsGrid(`cat-${cat}`,arr);
      })
    }

    function renderAllProducts(){ renderProductsGrid('productGrid',PRODUCTS) }

    function renderPopularList(){
      const list = $('popularList'); list.innerHTML='';
      const top = [...PRODUCTS].sort((a,b)=>b.rating-a.rating).slice(0,5);
      top.forEach(p=>{
        const d = document.createElement('div'); d.style.display='flex'; d.style.gap='8px'; d.style.alignItems='center'; d.style.padding='6px 0';
        d.innerHTML = `<img src="${p.image}" width="50" style="border-radius:6px"><div style="flex:1"><div style="font-weight:600">${p.name}</div><div class="small">₹${p.price}</div></div><button data-id="${p.id}" class="btn outline small popularWish">❤</button>`;
        d.querySelector('.popularWish').addEventListener('click',()=>handleWishlistAction(p.id));
        list.appendChild(d);
      })
    }

    function renderWishlistGridFor(email){
      const grid = $('wishlistGrid'); grid.innerHTML='';
      const wl = getWishlist(email) || [];
      if(wl.length===0){grid.innerHTML='<p class="small">Your wishlist is empty.</p>'; return}
      const items = PRODUCTS.filter(p=>wl.includes(p.id));
      renderProductsGrid('wishlistGrid',items);
    }

    function renderOrdersFor(email){
      const orders = getOrders(email) || [];
      const container = $('ordersList'); container.innerHTML='';
      if(orders.length===0){container.innerHTML='<p class="small">No orders placed yet.</p>'; return}
      const table = document.createElement('table'); table.innerHTML = `<thead><tr><th>Order ID</th><th>Items</th><th>Date</th><th>Amount</th></tr></thead>`;
      const tbody = document.createElement('tbody');
      orders.forEach(o=>{
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${o.id}</td><td>${o.items.map(i=>i.name).join(', ')}</td><td>${new Date(o.date).toLocaleString()}</td><td>₹${o.amount}</td>`;
        tbody.appendChild(tr);
      }); table.appendChild(tbody); container.appendChild(table);
    }

    function renderHeader(){
      const user = currentUser();
    $('welcomeMsg').textContent = user ? `Hi, ${user.name}` : '';
    // loginBtn acts as Login (when logged out) or Logout (when logged in)
    $('loginBtn').textContent = user ? 'Logout' : 'Login';
      updateWishlistCount();
    }

    function updateWishlistCount(){
      const user = currentUser(); let count = 0;
      if(user) count = getWishlist(user.email).length;
      $('wishCount').textContent = count;
    }

    /*********************
      Navigation / pages
    **********************/
    function showPage(id){
      document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
      const el = $(id); if(el) el.classList.add('active');
    }

    function showCategory(cat){
      if(cat==='all'){ showPage('homePage'); return }
      showPage('productsPage'); renderAllProducts(); // highlight filtering
      const items = PRODUCTS.filter(p=>p.category===cat);
      renderProductsGrid('productGrid',items);
    }

    // nav links
    document.querySelectorAll('[data-nav]').forEach(a=>{a.addEventListener('click',(e)=>{e.preventDefault(); const h = a.getAttribute('href').replace('#',''); if(h==='home') {showPage('homePage')} else if(h==='products'){showPage('productsPage')} else if(h==='contact'){showPage('contact')} else if(h==='about'){showPage('about')} })});

    /*********************
      Auth: register / login
    **********************/
    function openAuthModal(){ $('modalBackdrop').style.display='flex'; }
    function closeAuthModal(){ $('modalBackdrop').style.display='none'; }

    $('loginBtn').addEventListener('click',()=>{
      if(currentUser()){ logout(); showToast('Logged out'); return }
      openAuthModal(); renderAuthTabs('login');
    });
    // register button: open modal on register tab
    const regBtn = $('registerBtn');
    if(regBtn) regBtn.addEventListener('click',()=>{ openAuthModal(); renderAuthTabs('register'); });
    $('showLogin').addEventListener('click',()=>renderAuthTabs('login'));
    $('showRegister').addEventListener('click',()=>renderAuthTabs('register'));

    function renderAuthTabs(tab){
      if(tab==='login'){ $('loginForm').classList.remove('hidden'); $('registerForm').classList.add('hidden'); }
      else{ $('loginForm').classList.add('hidden'); $('registerForm').classList.remove('hidden'); }
    }

    // simple users list: stored in cm_users
    function getUsers(){return loadJSON('cm_users',[])}
    function saveUsers(u){saveJSON('cm_users',u)}

    $('doRegister').addEventListener('click',()=>{
      try{
        const nameEl = $('regName'), emailEl = $('regEmail'), passEl = $('regPass'), pass2El = $('regPass2');
        const name = nameEl ? nameEl.value.trim() : '';
        const email = emailEl ? emailEl.value.trim().toLowerCase() : '';
        const pass = passEl ? passEl.value : '';
        const pass2 = pass2El ? pass2El.value : '';
        $('regErr').textContent = '';
        console.log('Attempting register', {name,email});
        if(!name || !email || !pass){$('regErr').textContent='All fields required'; return}
        if(!/^\S+@\S+\.\S+$/.test(email)){ $('regErr').textContent='Enter a valid email'; return }
        if(pass.length<6){ $('regErr').textContent='Password must be at least 6 chars'; return }
        if(pass!==pass2){ $('regErr').textContent='Passwords do not match'; return }
        const users = getUsers(); if(users.find(u=>u.email===email)){ $('regErr').textContent='Email already registered'; return }
        users.push({name,email,pass}); saveUsers(users);
        setCurrentUser({name,email});
        // clear fields
        if(nameEl) nameEl.value=''; if(emailEl) emailEl.value=''; if(passEl) passEl.value=''; if(pass2El) pass2El.value='';
        closeAuthModal(); renderHeader(); showToast('Registered & logged in');
        console.log('Registration success for', email);
      }catch(err){
        console.error('Register error',err); $('regErr').textContent='Unable to register (check console)';
      }
    });

    $('doLogin').addEventListener('click',()=>{
      try{
        const emailEl = $('loginEmail'), passEl = $('loginPass');
        const email = emailEl ? emailEl.value.trim().toLowerCase() : '';
        const pass = passEl ? passEl.value : '';
        $('loginErr').textContent = '';
        if(!email||!pass){$('loginErr').textContent='All fields required'; return}
        const users = getUsers(); const user = users.find(u=>u.email===email && u.pass===pass);
        if(!user){$('loginErr').textContent='Invalid credentials'; return}
        setCurrentUser({name:user.name,email:user.email});
        // clear inputs
        if(emailEl) emailEl.value=''; if(passEl) passEl.value='';
        $('loginErr').textContent=''; closeAuthModal(); renderHeader(); showToast('Logged in');
      }catch(err){console.error('Login error',err); $('loginErr').textContent='Unable to login';}
    });

    // close modal clicking outside
    $('modalBackdrop').addEventListener('click',e=>{if(e.target.id==='modalBackdrop') closeAuthModal()});

    /*********************
      Wishlist / Cart / Orders
    **********************/
    function handleWishlistAction(pid){
      const user = currentUser(); if(!user){ openAuthModal(); renderAuthTabs('login'); showToast('Please login to add to wishlist'); return }
      const wl = getWishlist(user.email);
      if(wl.includes(pid)){ // remove
        const idx = wl.indexOf(pid); wl.splice(idx,1); saveWishlist(user.email,wl); updateWishlistCount(); renderWishlistGridFor(user.email); showToast('Removed from wishlist')
      } else { wl.push(pid); saveWishlist(user.email,wl); updateWishlistCount(); renderWishlistGridFor(user.email); showToast('Added to wishlist') }
    }

    // cart simple: we'll immediately convert Add to Cart -> order (demo)
    function addToCart(pid){
      const user = currentUser(); if(!user){ openAuthModal(); renderAuthTabs('login'); showToast('Please login to buy'); return }
      const prod = PRODUCTS.find(p=>p.id===pid);
      if(!prod) return; const orders = getOrders(user.email);
      const order = {id:'ORD'+Date.now(),items:[{id:prod.id,name:prod.name,price:prod.price}],date:Date.now(),amount:prod.price};
      orders.push(order); saveOrders(user.email,orders); renderOrdersFor(user.email); showToast('Order placed')
    }

    // product detail view + comments + report
    function openProductDetail(pid){
      const p = PRODUCTS.find(x=>x.id===pid); if(!p) return; showPage('productDetailPage');
      const div = $('productDetail'); div.innerHTML = `
        <div style="display:flex;gap:12px">
          <img src="${p.image}" width="240" style="border-radius:10px">
          <div style="flex:1">
            <h2 style="margin:0">${p.name}</h2>
            <div class="small">${p.category} · Rating: ${p.rating}</div>
            <h3>₹${p.price}</h3>
            <div style="display:flex;gap:8px;margin-top:12px"><button class="btn" id="buyNow">Buy now</button><button class="btn outline" id="detailWish">❤ Wishlist</button><button class="btn outline" id="reportProd">Report</button></div>
            <div style="margin-top:12px"><h4>Reviews & Comments</h4><div id="commentList"></div>
              <div style="margin-top:8px"><input id="commentText" placeholder="Write a review..." style="width:100%;padding:8px;border-radius:8px;border:1px solid #eee"></div>
              <div style="margin-top:8px;display:flex;gap:8px;justify-content:flex-end"><button class="btn" id="postComment">Post</button></div>
            </div>
          </div>
        </div>
      `;
      $('buyNow').addEventListener('click',()=>addToCart(p.id));
      $('detailWish').addEventListener('click',()=>handleWishlistAction(p.id));
      $('reportProd').addEventListener('click',()=>reportProduct(p.id));
      renderCommentsFor(p.id);
      $('postComment').addEventListener('click',()=>{
        const txt = $('commentText').value.trim(); if(!txt){showToast('Comment cannot be empty'); return}
        const user = currentUser(); if(!user){ openAuthModal(); renderAuthTabs('login'); showToast('Please login to comment'); return }
        const com = getComments(); if(!com[p.id]) com[p.id]=[]; com[p.id].push({by:user.name,email:user.email,text:txt,date:Date.now()}); saveComments(com); $('commentText').value=''; renderCommentsFor(p.id); showToast('Comment posted')
      });
    }

    function renderCommentsFor(pid){
      const com = getComments(); const arr = com[pid]||[]; const el = $('commentList'); el.innerHTML=''; if(arr.length===0){el.innerHTML='<p class="small">No reviews yet.</p>'; return}
      arr.slice().reverse().forEach(c=>{ const d = document.createElement('div'); d.style.padding='8px 0'; d.innerHTML = `<div style="font-weight:600">${c.by} <span class="small">· ${new Date(c.date).toLocaleString()}</span></div><div class="small">${c.text}</div>`; el.appendChild(d) })
    }

    function reportProduct(pid){
      const user = currentUser(); if(!user){ openAuthModal(); renderAuthTabs('login'); showToast('Login to report'); return }
      const prod = PRODUCTS.find(p=>p.id===pid);
      const reason = prompt('Why are you reporting this product? (short reason)'); if(!reason) return; const reports = getReports(); reports.push({product:prod.name,id:pid,by:user.email,reason,date:Date.now()}); saveReports(reports); showToast('Reported — thank you')
    }

    /*********************
      Contact & reporting storage
    **********************/
    $('contactForm').addEventListener('submit',e=>{e.preventDefault(); const name=$('contactName').value.trim(),email=$('contactEmail').value.trim(),msg=$('contactMsg').value.trim(); if(!name||!email||!msg){showToast('Fill all fields'); return} const arr=getMessages(); arr.push({name,email,msg,date:Date.now()}); saveMessages(arr); $('contactName').value='';$('contactEmail').value='';$('contactMsg').value=''; showToast('Message sent to customer care') })

    /*********************
      UI init
    **********************/
    function init(){
      renderCategories(); renderHomeSections(); renderAllProducts(); renderPopularList(); renderHeader();
      // events
      $('wishlistBtn').addEventListener('click',()=>{ const user=currentUser(); if(!user){ openAuthModal(); renderAuthTabs('login'); showToast('Login to view wishlist'); return } showPage('wishlistPage'); renderWishlistGridFor(user.email) });
      $('ordersBtn').addEventListener('click',()=>{ const user=currentUser(); if(!user){ openAuthModal(); renderAuthTabs('login'); showToast('Login to view orders'); return } showPage('ordersPage'); renderOrdersFor(user.email) });

      // search and sort
      $('searchInput').addEventListener('input',()=>{ const q=$('searchInput').value.trim().toLowerCase(); const filtered = PRODUCTS.filter(p=>p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)); renderProductsGrid('productGrid',filtered); showPage('productsPage'); });
      $('sortSel').addEventListener('change',()=>{ const v=$('sortSel').value; let arr=[...PRODUCTS]; if(v==='price-asc') arr.sort((a,b)=>a.price-b.price); else if(v==='price-desc') arr.sort((a,b)=>b.price-a.price); renderProductsGrid('productGrid',arr); showPage('productsPage') });

      // small keyboard shortcut: press W to open wishlist
      window.addEventListener('keydown',e=>{ if(e.key.toLowerCase()==='w'){ $('wishlistBtn').click() } })

      // initial counts
      updateWishlistCount();
    }

    init();
