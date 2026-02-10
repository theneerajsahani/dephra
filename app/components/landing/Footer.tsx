import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#f5f5f7] text-[#1d1d1f] py-16 px-6 md:px-12">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <span className="text-lg font-semibold tracking-tight">dephra</span>
                    </div>

                    <div>
                        <h4 className="text-[11px] font-semibold text-black/40 uppercase tracking-widest mb-6">Explore</h4>
                        <ul className="flex flex-col gap-3 text-xs font-medium">
                            <Link href="/demo/sofa" className="hover:underline opacity-80 hover:opacity-100">Product Demo</Link>
                            <Link href="#" className="hover:underline opacity-80 hover:opacity-100">Technology</Link>
                            <Link href="#" className="hover:underline opacity-80 hover:opacity-100">Enterprise</Link>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[11px] font-semibold text-black/40 uppercase tracking-widest mb-6">Connect</h4>
                        <ul className="flex flex-col gap-3 text-xs font-medium">
                            <a href="#" className="hover:underline opacity-80 hover:opacity-100">X / Twitter</a>
                            <a href="#" className="hover:underline opacity-80 hover:opacity-100">LinkedIn</a>
                            <a href="#" className="hover:underline opacity-80 hover:opacity-100">Instagram</a>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[11px] font-semibold text-black/40 uppercase tracking-widest mb-6">Support</h4>
                        <ul className="flex flex-col gap-3 text-xs font-medium">
                            <a href="mailto:hello@dephra.com" className="hover:underline opacity-80 hover:opacity-100">Contact Sales</a>
                            <Link href="#" className="hover:underline opacity-80 hover:opacity-100">Security</Link>
                            <Link href="#" className="hover:underline opacity-80 hover:opacity-100">Privacy Policy</Link>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[11px] font-medium text-black/40">
                    <p>Copyright © 2026 Dephra Studio. All rights reserved.</p>
                    <div className="flex gap-6">
                        <span>United States</span>
                        <div className="w-px h-3 bg-black/10" />
                        <span>English</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
