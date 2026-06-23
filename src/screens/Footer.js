// import React, { useState } from "react";
// import { theme } from "./theme";
// import {
//     FaFacebookF,
//     FaInstagram,
//     FaLinkedinIn,
//     FaYoutube
// } from "react-icons/fa";

// const Footer = () => {
//     const [hoveredLink, setHoveredLink] = useState(null);
//     const [hoveredSocial, setHoveredSocial] = useState(null);

//     const links = [
//         "Home",
//         "About",
//         "Services",
//         "Projects",
//         "Reviews",
//         "Contact"
//     ];

//     const socials = [
//         { name: "LinkedIn", icon: "in" },
//         { name: "Instagram", icon: "ig" },
//         { name: "Facebook", icon: "fb" },
//         { name: "Twitter", icon: "𝕏" }
//     ];

//     return (
//         <div
//             style={{
//                 maxWidth: "1200px",
//                 margin: "0 auto",
//                 padding: "70px 40px 20px",
//                 position: "relative",
//                 zIndex: 2,
//                 backgroundColor: theme.colors.black,
//             }}
//         >
//             <div
//                 style={{
//                     display: "grid",
//                     gridTemplateColumns: "2fr 1fr 1fr",
//                     gap: "80px"
//                 }}
//             >
//                 {/* LEFT SECTION */}
//                 <div>
//                     <div
//                         style={{
//                             display: "flex",
//                             alignItems: "center",
//                             gap: "15px",
//                             marginBottom: "25px"
//                         }}
//                     >
//                         <img
//                             src="/logo.png"
//                             alt="logo"
//                             style={{
//                                 width: "48px",
//                                 height: "48px",
//                                 objectFit: "contain"
//                             }}
//                         />

//                         <h2
//                             style={{
//                                 color: theme.colors.white,
//                                 margin: 0,
//                                 fontSize: "42px",
//                                 fontWeight: "800",
//                                 cursor: "pointer",
//                                 transition: "all 0.3s ease"
//                             }}
//                             onMouseEnter={(e) => {
//                                 e.target.style.color = theme.colors.copper;
//                                 e.target.style.textShadow =
//                                     "0 0 25px rgba(197,143,90,0.5)";
//                             }}
//                             onMouseLeave={(e) => {
//                                 e.target.style.color = theme.colors.white;
//                                 e.target.style.textShadow = "none";
//                             }}
//                         >
//                             AutoVira
//                         </h2>
//                     </div>

//                     <p
//                         style={{
//                             color: theme.colors.muted,
//                             lineHeight: "1.8",
//                             maxWidth: "500px",
//                             fontSize: "18px"
//                         }}
//                     >
//                         End-to-end event management, exhibition infrastructure, and brand activation solutions for businesses nationwide.
//                     </p>


//                     {/* Social Icons */}

//                     <div
//                         style={{
//                             display: "flex",
//                             gap: "12px",
//                             marginTop: "35px"
//                         }}
//                     >
//                         {[
//                             <FaFacebookF />,
//                             <FaLinkedinIn />,
//                             <FaInstagram />,
//                             <FaYoutube />
//                         ].map((icon, index) => (
//                             <div
//                                 key={index}
//                                 onMouseEnter={() => setHoveredSocial(index)}
//                                 onMouseLeave={() => setHoveredSocial(null)}
//                                 style={{
//                                     width: "48px",
//                                     height: "48px",
//                                     borderRadius: "14px",
//                                     background:
//                                         hoveredSocial === index
//                                             ? theme.colors.copper
//                                             : "rgba(255,255,255,0.03)",
//                                     border:
//                                         hoveredSocial === index
//                                             ? `1px solid ${theme.colors.copper}`
//                                             : `1px solid ${theme.colors.border}`,
//                                     display: "flex",
//                                     alignItems: "center",
//                                     justifyContent: "center",
//                                     color:
//                                         hoveredSocial === index
//                                             ? theme.colors.black
//                                             : theme.colors.white,
//                                     cursor: "pointer",
//                                     transform:
//                                         hoveredSocial === index
//                                             ? "translateY(-5px)"
//                                             : "translateY(0)",
//                                     boxShadow:
//                                         hoveredSocial === index
//                                             ? `0 0 25px rgba(197,143,90,0.4)`
//                                             : "none",
//                                     transition: "all 0.35s ease"
//                                 }}
//                             >
//                                 {icon}
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* QUICK LINKS */}
//                 <div>
//                     <h3
//                         style={{
//                             color: theme.colors.white,
//                             marginBottom: "30px",
//                             fontSize: "28px",
//                             letterSpacing: "1px"
//                         }}
//                     >
//                         QUICK LINKS
//                     </h3>

//                     {[
//                         "Home",
//                         "What We Do",
//                         "Our Products",
//                         "About Us",
//                         "Contact"
//                     ].map((item, index) => (
//                         <div
//                             key={item}
//                             onMouseEnter={() => setHoveredLink(index)}
//                             onMouseLeave={() => setHoveredLink(null)}
//                             style={{
//                                 marginBottom: "20px",
//                                 color:
//                                     hoveredLink === index
//                                         ? theme.colors.copper
//                                         : theme.colors.muted,
//                                 cursor: "pointer",
//                                 fontSize: "18px",
//                                 fontWeight:
//                                     hoveredLink === index
//                                         ? "600"
//                                         : "400",
//                                 transform:
//                                     hoveredLink === index
//                                         ? "translateX(10px)"
//                                         : "translateX(0)",
//                                 transition: "all 0.3s ease",
//                                 display: "flex",
//                                 alignItems: "center",
//                                 gap: "10px"
//                             }}
//                         >
//                             <span
//                                 style={{
//                                     opacity:
//                                         hoveredLink === index ? 1 : 0,
//                                     transition: "0.3s"
//                                 }}
//                             >
//                                 →
//                             </span>

//                             {item}
//                         </div>
//                     ))}
//                 </div>

//                 {/* CONTACT */}
//                 <div>
//                     <h3
//                         style={{
//                             color: theme.colors.white,
//                             marginBottom: "30px",
//                             fontSize: "28px"
//                         }}
//                     >
//                         PLANT DESK
//                     </h3>

//                     <div
//                         style={{
//                             display: "flex",
//                             alignItems: "center",
//                             gap: "12px",
//                             color: theme.colors.muted,
//                             marginBottom: "22px"
//                         }}
//                     >
//                         <span
//                             style={{
//                                 color: theme.colors.copper
//                             }}
//                         >
//                             ☎
//                         </span>
//                         +91 92252 32463
//                     </div>

//                     <div
//                         style={{
//                             display: "flex",
//                             alignItems: "center",
//                             gap: "12px",
//                             color: theme.colors.muted
//                         }}
//                     >
//                         <span
//                             style={{
//                                 color: theme.colors.copper
//                             }}
//                         >
//                             ✉
//                         </span>
//                         event@autovira.com
//                     </div>
//                 </div>
//             </div>

//             {/* Bottom */}
//             <div
//                 style={{
//                     borderTop: `1px solid ${theme.colors.border}`,
//                     marginTop: "70px",
//                     paddingTop: "25px",
//                     textAlign: "center",
//                     color: theme.colors.muted,
//                     fontSize: "15px"
//                 }}
//             >
//                 © {new Date().getFullYear()}{" "}
//                 <span
//                     style={{
//                         color: theme.colors.copper,
//                         fontWeight: "700"
//                     }}
//                 >
//                     AutoVira Events Ltd.
//                 </span>
//                 {" "}All Rights Reserved.
//             </div>
//         </div>

//     );
// };

// export default Footer;

import React, { useState } from "react";
import { theme } from "./theme";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube
} from "react-icons/fa";

const Footer = () => {
    const [hoveredLink, setHoveredLink] = useState(null);
    const [hoveredSocial, setHoveredSocial] = useState(null);

    return (
        /* 1. OUTER WRAPPER: Spans edge-to-edge infinitely with the dark background color */
        <div
            style={{
                width: "100%",
                backgroundColor: theme.colors.black,
                position: "relative",
                zIndex: 2,
                boxSizing: "border-box"
            }}
        >
            {/* 2. INNER CONTAINER: Keeps your content centered and locked safely at max-width */}
            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "70px 40px 20px",
                    boxSizing: "border-box"
                }}
            >
                <div
                    className="footer-grid-container"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "2fr 1fr 1fr",
                        gap: "60px"
                    }}
                >
                    {/* LEFT SECTION */}
                    <div>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "15px",
                                marginBottom: "25px"
                            }}
                        >
                            <img
                                src="/logo.png"
                                alt="logo"
                                style={{
                                    width: "42px",
                                    height: "42px",
                                    objectFit: "contain"
                                }}
                            />

                            <h2
                                className="footer-brand-title"
                                style={{
                                    color: theme.colors.white,
                                    margin: 0,
                                    fontSize: "36px",
                                    fontWeight: "800",
                                    cursor: "pointer",
                                    transition: "all 0.3s ease"
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.color = theme.colors.copper;
                                    e.target.style.textShadow =
                                        "0 0 25px rgba(197,143,90,0.5)";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.color = theme.colors.white;
                                    e.target.style.textShadow = "none";
                                }}
                            >
                                AutoVira
                            </h2>
                        </div>

                        <p
                            style={{
                                color: theme.colors.muted,
                                lineHeight: "1.8",
                                maxWidth: "500px",
                                fontSize: "16px"
                            }}
                        >
                            End-to-end event management, exhibition infrastructure, and brand activation solutions for businesses nationwide.
                        </p>

                        {/* Social Icons */}
                        <div
                            style={{
                                display: "flex",
                                gap: "12px",
                                marginTop: "35px"
                            }}
                        >
                            {[
                                <FaFacebookF />,
                                <FaLinkedinIn />,
                                <FaInstagram />,
                                <FaYoutube />
                            ].map((icon, index) => (
                                <div
                                    key={index}
                                    onMouseEnter={() => setHoveredSocial(index)}
                                    onMouseLeave={() => setHoveredSocial(null)}
                                    style={{
                                        width: "44px",
                                        height: "44px",
                                        borderRadius: "12px",
                                        background:
                                            hoveredSocial === index
                                                ? theme.colors.copper
                                                : "rgba(255,255,255,0.03)",
                                        border:
                                            hoveredSocial === index
                                                ? `1px solid ${theme.colors.copper}`
                                                : `1px solid ${theme.colors.border}`,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color:
                                            hoveredSocial === index
                                                ? theme.colors.black
                                                : theme.colors.white,
                                        cursor: "pointer",
                                        transform:
                                            hoveredSocial === index
                                                ? "translateY(-5px)"
                                                : "translateY(0)",
                                        boxShadow:
                                            hoveredSocial === index
                                                ? `0 0 25px rgba(197,143,90,0.4)`
                                                : "none",
                                        transition: "all 0.35s ease"
                                    }}
                                >
                                    {icon}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* QUICK LINKS */}
                    <div>
                        <h3
                            style={{
                                color: theme.colors.white,
                                marginBottom: "24px",
                                fontSize: "20px",
                                letterSpacing: "1px"
                            }}
                        >
                            QUICK LINKS
                        </h3>

                        {[
                            "Home",
                            "What We Do",
                            "Our Products",
                            "About Us",
                            "Contact"
                        ].map((item, index) => (
                            <div
                                key={item}
                                onMouseEnter={() => setHoveredLink(index)}
                                onMouseLeave={() => setHoveredLink(null)}
                                style={{
                                    marginBottom: "16px",
                                    color:
                                        hoveredLink === index
                                            ? theme.colors.copper
                                            : theme.colors.muted,
                                    cursor: "pointer",
                                    fontSize: "16px",
                                    fontWeight:
                                        hoveredLink === index
                                            ? "600"
                                            : "400",
                                    transform:
                                        hoveredLink === index
                                            ? "translateX(6px)"
                                            : "translateX(0)",
                                    transition: "all 0.3s ease",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px"
                                }}
                            >
                                <span
                                    style={{
                                        opacity:
                                            hoveredLink === index ? 1 : 0,
                                        transition: "0.3s"
                                    }}
                                >
                                    →
                                </span>
                                {item}
                            </div>
                        ))}
                    </div>

                    {/* CONTACT */}
                    <div>
                        <h3
                            style={{
                                color: theme.colors.white,
                                marginBottom: "24px",
                                fontSize: "20px"
                            }}
                        >
                            PLANT DESK
                        </h3>

                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                color: theme.colors.muted,
                                marginBottom: "18px",
                                fontSize: "16px"
                            }}
                        >
                            <span style={{ color: theme.colors.copper }}>☎</span>
                            +91 92252 32463
                        </div>

                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                color: theme.colors.muted,
                                fontSize: "16px"
                            }}
                        >
                            <span style={{ color: theme.colors.copper }}>✉</span>
                            event@autovira.com
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright Strip */}
                <div
                    style={{
                        borderTop: `1px solid ${theme.colors.border}`,
                        marginTop: "60px",
                        paddingTop: "25px",
                        textAlign: "center",
                        color: theme.colors.muted,
                        fontSize: "14px"
                    }}
                >
                    © {new Date().getFullYear()}{" "}
                    <span
                        style={{
                            color: theme.colors.copper,
                            fontWeight: "700"
                        }}
                    >
                        AutoVira Events Ltd.
                    </span>{" "}
                    All Rights Reserved.
                </div>
            </div>

            {/* Injected Media Breakpoints */}
            <style>{`
                @media (max-width: 768px) {
                    .footer-grid-container {
                        grid-template-columns: 1fr !important;
                        gap: 40px !important;
                    }
                    .footer-brand-title {
                        font-size: 32px !important;
                    }
                }
            `}</style>
        </div>
    );
};

export default Footer;