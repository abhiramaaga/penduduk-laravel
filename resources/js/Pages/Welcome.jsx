import React from 'react';
import { Link } from '@inertiajs/react';
import GenderPieChart from "./GenderPieChart.jsx";
import KabupatenChart from "./KabupatenChart.jsx"; // Impor komponen chart baru

function App() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.logo}></div>
        <nav style={styles.navbar}>
          <a href="#" style={styles.navLink}>Profil</a>
          <a href="#" style={styles.navLink}>Penduduk</a>
          <a href="#" style={styles.navLink}>Berita</a>
          <a href="#" style={styles.navLink}>Program</a>
          <button style={styles.loginButton}>
            <Link href={route('login')}>login</Link>
          </button>
        </nav>
      </header>
      <main style={styles.mainContent}>
        <h1 style={styles.title}>Daftar Data Penduduk Jogja 2024</h1>
        <div style={styles.dataGrid}>
          <div style={styles.dataCard}>
            <p style={styles.dataTitle}>Penduduk</p>
            <p style={styles.dataValue}>3.759.500</p>
          </div>
          <div style={styles.dataCard}>
            <p style={styles.dataTitle}>Kartu Keluarga</p>
            <p style={styles.dataValue}>1.120.477,00</p>
          </div>
          <div style={styles.dataCard}>
            <p style={styles.dataTitle}>Laki</p>
            <p style={styles.dataValue}>1.860.120</p>
          </div>
          <div style={styles.dataCard}>
            <p style={styles.dataTitle}>Perempuan</p>
            <p style={styles.dataValue}>1.899.380</p>
          </div>
        </div>
        <div style={styles.chartsSection}>
          <div style={styles.chart}>
            <GenderPieChart width="100%" height="100%" />
            <div style={styles.chartTitleWrapper}>
              <p style={styles.chartTitle}>Perbandingan Laki-Laki dan Perempuan</p>
            </div>
          </div>
          <div style={styles.chart}>
            <div style={styles.chartContainer}>
              <KabupatenChart width="100%" height="100%" />
            </div>
            <div style={styles.chartTitleWrapper}>
              <p style={styles.chartTitle}>Jumlah Penduduk di Kabupaten Yogyakarta</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#0b1a45',
    color: '#fff',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: '#162d6d',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    backgroundImage: 'url(logo.png)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    width: '50px',
    height: '50px',
  },
  navbar: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
  },
  loginButton: {
    padding: '5px 10px',
    color: '#162d6d',
    backgroundColor: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  mainContent: {
    padding: '20px',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  dataGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '15px',
  },
  dataCard: {
    backgroundColor: '#1a3d91',
    padding: '15px',
    borderRadius: '8px',
    textAlign: 'center',
  },
  dataTitle: {
    fontSize: '1rem',
    marginBottom: '10px',
  },
  dataValue: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  chartsSection: {
    display: 'flex',
    gap: '20px',
    marginTop: '20px',
  },
  chart: {
    flex: 1,
    height: '450px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px', // Memberikan ruang di sekitar chart agar tidak terlalu dekat ke tepi
    overflow: 'hidden', // Mencegah konten chart melebihi batas
  },
  chartContainer: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  chartTitleWrapper: {
    marginTop: '10px',
    textAlign: 'center',
    width: '100%',
    backgroundColor: 'transparent', // Pastikan latar belakang tidak menghalangi teks
  },
  chartTitle: {
    fontSize: '1rem',
    color: '#162d6d',
    fontWeight: 'bold', // Tambahkan gaya agar lebih terlihat
  },
};

export default App;
