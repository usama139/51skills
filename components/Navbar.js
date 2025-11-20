"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

import { Search, Globe, BookOpen, ShoppingCart, Bell, User, Sun, Menu, X } from "lucide-react";

export default function Navbar() {
  const [cartCount] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className={styles.navbar}>
        <div className={styles.container}>

          {/* Left Section */}
          <div className={styles.left}>

            {/* Hamburger Icon (mobile only) */}
            <button
              className={styles.hamburger}
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>

            {/* Logo */}
            <div className={styles.logo}>51Skills</div>

            {/* Desktop Menu */}
            <div className={styles.menu}>
              <div className={styles.menuItem}>Explore ▾</div>
              <div className={styles.menuItem}>Teach ▾</div>
            </div>
          </div>

          {/* Search */}
          <div className={styles.searchWrapper}>
            <div className={styles.searchBox}>
              <Search className={styles.searchIcon} />
              <input className={styles.searchInput} placeholder="Search for courses" />
            </div>
          </div>

          {/* Right Icons */}
          <div className={styles.right}>
            <div className={styles.iconBtn1}><Sun className={styles.iconSvg} /></div>
            <div className={styles.iconBtn}><Globe className={styles.iconSvg} /></div>
            <div className={styles.iconBtn}><BookOpen className={styles.iconSvg} /></div>

            <div className={styles.cartWrapper}>
              <div className={styles.iconBtn}>
                <ShoppingCart className={styles.iconSvg} />
              </div>
              <span className={styles.cartCount}>{cartCount}</span>
            </div>

            <div className={styles.iconBtn}><Bell className={styles.iconSvg} /></div>

            <div className={`${styles.iconBtn} ${styles.userIcon}`}>
              <User className={styles.iconSvg} />
            </div>
          </div>
        </div>
      </nav>

      {/* SIDE MENU */}
      <div className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ""}`}>
        <div className={styles.sidebarHeader}>
          <span>Explore Categories</span>

          <button className={styles.closeBtn} onClick={() => setSidebarOpen(false)}>
            <X size={22} />
          </button>
        </div>

        <div className={styles.sidebarLinks}>
          <p>Web Development</p>
          <p>Mobile Development</p>
          <p>Game Development</p>
          <p>Entrepreneurship</p>
          <p>Finance</p>
          <p>Management</p>
          <p>Certifications</p>
          <p>Network & Security</p>
          <p>Hardware</p>
          <p>Instructor Dashboard</p>
          <p>Create New Course</p>
        </div>
      </div>

      {/* BG Overlay */}
      {sidebarOpen && (
        <div
          className={styles.overlay}
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
}
