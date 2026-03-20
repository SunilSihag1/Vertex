const ManageProducts = () => {
return(

<>
  <div className="flex flex-col gap-4">
    <div className="relative group">
      <span
        className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#143109]/40 group-focus-within:text-[#143109] transition-colors">search</span>
      <input
        className="w-full pl-12 pr-4 py-3.5 bg-white border border-[#143109]/10 rounded-2xl focus:ring-2 focus:ring-[#143109]/20 focus:border-[#143109] outline-none transition-all placeholder:text-charcoal/40"
        placeholder="Search products by name" type="text" />
    </div>
    <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar">
      <button
        className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-full font-medium text-sm whitespace-nowrap shadow-lg shadow-primary/20">
        All Categories
        <span className="material-symbols-outlined text-sm">expand_more</span>
      </button>
      <button
        className="px-5 py-2.5 bg-white dark:bg-primary/20 border border-primary/5 dark:border-white/5 text-charcoal/70 dark:text-slate-300 rounded-full font-medium text-sm whitespace-nowrap hover:bg-primary/5 transition-colors">Cotton</button>
      <button
        className="px-5 py-2.5 bg-white dark:bg-primary/20 border border-primary/5 dark:border-white/5 text-charcoal/70 dark:text-slate-300 rounded-full font-medium text-sm whitespace-nowrap hover:bg-primary/5 transition-colors">Polo</button>
      <button
        className="px-5 py-2.5 bg-white dark:bg-primary/20 border border-primary/5 dark:border-white/5 text-charcoal/70 dark:text-slate-300 rounded-full font-medium text-sm whitespace-nowrap hover:bg-primary/5 transition-colors">Sportswear</button>
    </div>
  </div>
  <button
    className="w-full flex items-center justify-center gap-2 py-4 bg-primary dark:bg-primary text-white rounded-2xl font-bold text-lg hover:opacity-90 transition-all shadow-xl shadow-primary/20">
    <span className="material-symbols-outlined">add_circle</span>
    Add New Product
  </button>
  <div className="space-y-4 pt-4">
    <div
      className="glass-card rounded-2xl p-5 flex flex-col sm:flex-row gap-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-full sm:w-32 h-32 rounded-xl bg-cover bg-center flex-shrink-0"
        data-alt="White custom cotton t-shirt mockup"
        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCu_1GeE6iKmSTqIC6C2-Io_JGj_i9n-9FgpvQy6Jk_yNWhVLGQmqjwJPGaTLk1-Ul5QPqMrmlv3MLVtecgKfckQoYxk6TRphC9zLxdZkKGvkyfFfD5mAxdQACWJ2k_oBQlZ90JUFmAY8kUxLz0ShfOzzNdTxOtZeGtoyL4swH3gB5Evy24BOmOw1c4ZNOrqU4iEukcrXIOdrENpRTtP8jonjDrA0Oymt5Vfn3RXCStMKaFyGUFF_UzU0HzwhGPFQvDXd1BaYPWGpVl')" }}>

      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-bold text-lg text-[#143109]">Custom Cotton T-Shirt</h3>
          <span
            className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold rounded-full uppercase tracking-wider">Active</span>
        </div>
        <p className="text-charcoal/60 dark:text-slate-400 text-sm mb-2">Premium breathable cotton with custom print
          area.</p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4 text-sm font-medium">
          <span className="text-[#143109] font-bold">₹899</span>
          <span
            className="text-charcoal/40 dark:text-slate-500 border-l border-primary/10 dark:border-white/10 pl-4">Cotton
            Wear</span>
          <span
            className="text-charcoal/40 dark:text-slate-500 border-l border-primary/10 dark:border-white/10 pl-4">Stock:
            25</span>
        </div>
        <div className="flex gap-2 mt-auto">
          <button
            className="flex-1 flex items-center justify-center gap-1 py-2 border border-sage/40 text-primary rounded-xl hover:bg-sage/5 transition-colors text-sm font-semibold text-[#143109] border-[#143109]/20">
            <span className="material-symbols-outlined text-lg">edit</span> Edit
          </button>
          <button
            className="flex-1 flex items-center justify-center gap-1 py-2 border border-sage/40 text-primary rounded-xl hover:bg-sage/5 transition-colors text-sm font-semibold text-[#143109] border-[#143109]/20">
            <span className="material-symbols-outlined text-lg">visibility</span> View
          </button>
          <button
            className="px-3 py-2 border border-red-100 dark:border-red-900/30 text-red-500 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors">
            <span className="material-symbols-outlined text-lg">delete</span>
          </button>
        </div>
      </div>
    </div>
    <div
      className="glass-card rounded-2xl p-5 flex flex-col sm:flex-row gap-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-full sm:w-32 h-32 rounded-xl bg-cover bg-center flex-shrink-0"
        data-alt="Navy blue premium polo shirt"
         style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDn5KGf95fr8L2algGU9Daf7iO5iRbGcyrAgzNOpccJ-H6SskIcsobEHLzE5y9MQ-BN_Vn_WzrXbwQeDVF13v4yYtMpy63DV1rRXqImrT8srZFNVRbiDM2iHtfbbVKMGd0eNVDAhxrixPofYmBE2tUhYI1_VBfLyQcgL4gQJwGWIwxYK1L1dk8ohG-LSSp3egXBWj3YstEQxu5NtnvMP69sZEzqa_TEhNjbRnHwpJEU6F1YWxdbFYaobegg0Ej5Sj02sPwweh3NMZdL')" }}>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-bold text-lg text-[#143109]">Premium Polo Shirt</h3>
          <span
            className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold rounded-full uppercase tracking-wider">Active</span>
        </div>
        <p className="text-charcoal/60 dark:text-slate-400 text-sm mb-2">Classic fit with reinforced collar and pearl
          buttons.</p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4 text-sm font-medium">
          <span className="text-[#143109] font-bold">₹1299</span>
          <span
            className="text-charcoal/40 dark:text-slate-500 border-l border-primary/10 dark:border-white/10 pl-4">Polo
            Collection</span>
          <span
            className="text-charcoal/40 dark:text-slate-500 border-l border-primary/10 dark:border-white/10 pl-4">Stock:
            12</span>
        </div>
        <div className="flex gap-2 mt-auto">
          <button
            className="flex-1 flex items-center justify-center gap-1 py-2 border border-sage/40 text-primary rounded-xl hover:bg-sage/5 transition-colors text-sm font-semibold text-[#143109] border-[#143109]/20">
            <span className="material-symbols-outlined text-lg">edit</span> Edit
          </button>
          <button
            className="flex-1 flex items-center justify-center gap-1 py-2 border border-sage/40 text-primary rounded-xl hover:bg-sage/5 transition-colors text-sm font-semibold text-[#143109] border-[#143109]/20">
            <span className="material-symbols-outlined text-lg">visibility</span> View
          </button>
          <button
            className="px-3 py-2 border border-red-100 dark:border-red-900/30 text-red-500 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors">
            <span className="material-symbols-outlined text-lg">delete</span>
          </button>
        </div>
      </div>
    </div>
    <div className="glass-card rounded-2xl p-5 flex flex-col sm:flex-row gap-5 shadow-sm transition-shadow">
      <div className="w-full sm:w-32 h-32 rounded-xl bg-cover bg-center flex-shrink-0 grayscale"
        data-alt="Dark grey sports performance tee"
        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBoRXkr9wkVxiKvAY89Cw1vyX5QIK-_X-XUUm3IOiu6Q2gWsQ_7JbcFw54-Blqi5CgegqOPx8DGNz3-ACmfyQs2E1n5GwQb3W0dj2T42nvwuY2AsfRTfKZSwhUqzlusP3VfDjfYUsr3inlTk0NEpf3rEJ5D9hgkfF5kUyp4k8te3FUyMZdbMEtWPfwy8fSFJp4osBETqo7xBQaM8znj-lBww2rMOd2vJj9xJ3DeYKKAUlV_Cead7OLjtDiyQ9ywvw8bbDq-C4MYo1WY')" }}>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-bold text-lg text-[#143109]">Sports Performance Tee</h3>
          <span
            className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-xs font-bold rounded-full uppercase tracking-wider">Out
            of Stock</span>
        </div>
        <p className="text-charcoal/60 dark:text-slate-400 text-sm mb-2">Moisture-wicking fabric designed for high
          intensity.</p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4 text-sm font-medium">
          <span className="text-[#143109] font-bold">₹999</span>
          <span
            className="text-charcoal/40 dark:text-slate-500 border-l border-primary/10 dark:border-white/10 pl-4">Sportswear</span>
          <span className="text-red-500/80 border-l border-primary/10 dark:border-white/10 pl-4">Sold Out</span>
        </div>
        <div className="flex gap-2 mt-auto">
          <button
            className="flex-1 flex items-center justify-center gap-1 py-2 border border-sage/40 text-primary rounded-xl hover:bg-sage/5 transition-colors text-sm font-semibold text-[#143109] border-[#143109]/20">
            <span className="material-symbols-outlined text-lg">edit</span> Edit
          </button>
          <button
            className="flex-1 flex items-center justify-center gap-1 py-2 border border-sage/40 text-primary rounded-xl hover:bg-sage/5 transition-colors text-sm font-semibold text-[#143109] border-[#143109]/20">
            <span className="material-symbols-outlined text-lg">visibility</span> View
          </button>
          <button
            className="px-3 py-2 border border-red-100 dark:border-red-900/30 text-red-500 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors">
            <span className="material-symbols-outlined text-lg">delete</span>
          </button>
        </div>
      </div>
    </div>
    <div
      className="glass-card rounded-2xl p-5 flex flex-col sm:flex-row gap-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-full sm:w-32 h-32 rounded-xl bg-cover bg-center flex-shrink-0"
        data-alt="Graphic oversized t-shirt with urban print"
        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBoRXkr9wkVxiKvAY89Cw1vyX5QIK-_X-XUUm3IOiu6Q2gWsQ_7JbcFw54-Blqi5CgegqOPx8DGNz3-ACmfyQs2E1n5GwQb3W0dj2T42nvwuY2AsfRTfKZSwhUqzlusP3VfDjfYUsr3inlTk0NEpf3rEJ5D9hgkfF5kUyp4k8te3FUyMZdbMEtWPfwy8fSFJp4osBETqo7xBQaM8znj-lBww2rMOd2vJj9xJ3DeYKKAUlV_Cead7OLjtDiyQ9ywvw8bbDq-C4MYo1WY')" }}>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-bold text-lg text-[#143109]">Oversized Graphic Tee</h3>
          <span
            className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold rounded-full uppercase tracking-wider">Active</span>
        </div>
        <p className="text-charcoal/60 dark:text-slate-400 text-sm mb-2">Streetwear inspired boxy fit with 280GSM
          fabric.</p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4 text-sm font-medium">
          <span className="text-[#143109] font-bold">₹1199</span>
          <span
            className="text-charcoal/40 dark:text-slate-500 border-l border-primary/10 dark:border-white/10 pl-4">Graphic
            Collection</span>
          <span
            className="text-charcoal/40 dark:text-slate-500 border-l border-primary/10 dark:border-white/10 pl-4">Stock:
            18</span>
        </div>
        <div className="flex gap-2 mt-auto">
          <button
            className="flex-1 flex items-center justify-center gap-1 py-2 border border-sage/40 text-primary rounded-xl hover:bg-sage/5 transition-colors text-sm font-semibold text-[#143109] border-[#143109]/20">
            <span className="material-symbols-outlined text-lg">edit</span> Edit
          </button>
          <button
            className="flex-1 flex items-center justify-center gap-1 py-2 border border-sage/40 text-primary rounded-xl hover:bg-sage/5 transition-colors text-sm font-semibold text-[#143109] border-[#143109]/20">
            <span className="material-symbols-outlined text-lg">visibility</span> View
          </button>
          <button
            className="px-3 py-2 border border-red-100 dark:border-red-900/30 text-red-500 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors">
            <span className="material-symbols-outlined text-lg">delete</span>
          </button>
        </div>
      </div>
    </div>
  </div>

</>
);
};

export default ManageProducts;