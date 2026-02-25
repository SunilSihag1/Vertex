const Footer = () => {

    return (

        <footer class="bg-white dark:bg-background-dark border-t border-slate-100 dark:border-slate-800 pt-24 pb-12">
            <div class="max-w-7xl mx-auto px-6">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
                    <div class="lg:col-span-5">
                        <div class="flex items-center gap-2 mb-8">
                            <div class="bg-slate-900 dark:bg-slate-100 p-1.5 rounded-lg text-white dark:text-slate-900">
                                <span class="material-symbols-outlined text-2xl font-bold">shopping_bag</span>
                            </div>
                            <span class="text-2xl font-black tracking-tight text-slate-900 dark:text-white">Smart Retail</span>
                        </div>
                        <p class="text-slate-500 dark:text-slate-400 max-w-sm mb-10 leading-relaxed">
                            The ultimate retail management and online store builder for modern merchants. Scaling businesses since 2024.
                        </p>
                        <div class="flex gap-4">
                            <a class="size-11 rounded-full bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-primary transition-colors" href="#">
                                <svg class="size-5 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path></svg>
                            </a>
                            <a class="size-11 rounded-full bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-primary transition-colors" href="#">
                                <svg class="size-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg>
                            </a>
                            <a class="size-11 rounded-full bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-primary transition-colors" href="#">
                                <svg class="size-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                            </a>
                        </div>
                    </div>
                    <div class="lg:col-span-2">
                        <h5 class="text-xs font-black tracking-widest text-slate-900 dark:text-white uppercase mb-8">Product</h5>
                        <ul class="space-y-5 text-[15px] text-slate-500 dark:text-slate-400 font-medium">
                            <li><a class="hover:text-primary transition-colors" href="#">Features</a></li>
                            <li><a class="hover:text-primary transition-colors" href="#">Integrations</a></li>
                            <li><a class="hover:text-primary transition-colors" href="#">Pricing</a></li>
                            <li><a class="hover:text-primary transition-colors" href="#">Updates</a></li>
                        </ul>
                    </div>
                    <div class="lg:col-span-2">
                        <h5 class="text-xs font-black tracking-widest text-slate-900 dark:text-white uppercase mb-8">Resources</h5>
                        <ul class="space-y-5 text-[15px] text-slate-500 dark:text-slate-400 font-medium">
                            <li><a class="hover:text-primary transition-colors" href="#">Help Center</a></li>
                            <li><a class="hover:text-primary transition-colors" href="#">Blog</a></li>
                            <li><a class="hover:text-primary transition-colors" href="#">Tutorials</a></li>
                            <li><a class="hover:text-primary transition-colors" href="#">Community</a></li>
                        </ul>
                    </div>
                    <div class="lg:col-span-2 lg:col-start-11">
                        <h5 class="text-xs font-black tracking-widest text-slate-900 dark:text-white uppercase mb-8">Legal</h5>
                        <ul class="space-y-5 text-[15px] text-slate-500 dark:text-slate-400 font-medium">
                            <li><a class="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
                            <li><a class="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
                            <li><a class="hover:text-primary transition-colors" href="#">Cookie Policy</a></li>
                            <li><a class="hover:text-primary transition-colors" href="#">GDPR</a></li>
                        </ul>
                    </div>
                </div>
                <div class="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p class="text-[13px] text-slate-400 font-medium">© 2024 Smart Retail SaaS Platform. All rights reserved.</p>
                    <div class="flex items-center gap-8">
                        <div class="flex items-center gap-2">
                            <div class="size-2 rounded-full bg-primary"></div>
                            <span class="text-[13px] text-slate-400 font-medium">System Operational</span>
                        </div>
                        <a class="text-[13px] text-slate-400 font-medium hover:text-primary transition-colors" href="#">Back to top</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;