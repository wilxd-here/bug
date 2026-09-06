// ==========================================
// DATABASE AKUN XAERISOFT VOID
// Urutan Role (terendah ke tertinggi): 
// 'member' -> 'reseller' -> 'partner' -> 'admin' -> 'owner'
// ==========================================

const databaseAkun = [
    { username: "wilzie", password: "123", role: "owner" },
    { username: "", password: "123", role: "admin" },
    // Kamu bisa tambah akun pembeli baru di bawah sini:
    // { username: "nama_pembeli", password: "password_nya", role: "member" },
];
