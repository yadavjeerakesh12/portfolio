import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="bg-cyan-300 p-3">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-xl sm:text-2xl font-bold">
                        <span className="text-3xl text-fuchsia-600">
                            &lt;/&gt;
                        </span>{" "}
                        Rakesh Yadav
                    </h1>
                </div>
                <div className="hidden md:flex gap-8 text-xl">
                    <Link
                        className="hover:text-green-500 hover:underline"
                        to="/"
                    >
                        Home
                    </Link>
                    <Link
                        className="hover:text-blue-500 hover:underline"
                        to="/about"
                    >
                        About
                    </Link>
                    <Link
                        className="hover:text-yellow-500 hover:underline"
                        to="/skill"
                    >
                        Skill
                    </Link>
                    <Link
                        className="hover:text-red-500 hover:underline"
                        to="/project"
                    >
                        Project
                    </Link>
                    <Link
                        className="hover:text-black hover:underline"
                        to="/contact"
                    >
                        Contact
                    </Link>
    
                </div>
                {/* Hamburger Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-3xl font-bold"
                >
                    {menuOpen ? "✕" : "☰"}
                </button>

            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden flex flex-col items-center gap-4 mt-4 pb-3 text-xl">

                    <Link
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-green-500 hover:underline"
                        to="/"
                    >
                        Home
                    </Link>

                    <Link
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-blue-500 hover:underline"
                        to="/about"
                    >
                        About
                    </Link>

                    <Link
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-yellow-500 hover:underline"
                        to="/skill"
                    >
                        Skill
                    </Link>

                    <Link
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-red-500 hover:underline"
                        to="/project"
                    >
                        Project
                    </Link>
                    <Link
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-black hover:underline"
                        to="/contact"
                    >
                        Contact
                    </Link>
                </div>
            )}

        </nav>
    );
}

export default Navbar;