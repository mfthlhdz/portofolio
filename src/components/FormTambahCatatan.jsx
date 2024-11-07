// src/components/FormTambahCatatan.jsx
import React, { useState } from 'react';
import '../css/FormTambahCatatan.css';

const FormTambahCatatan = () => {
  const [formData, setFormData] = useState({
    idKambing: '',
    tanggal: '',
    umurKambing: '',
    berat: '',
    jenisKelamin: '',
    pakan: '',
    jumlahPakan: '',
    catatan: '',
    perawatan: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="form-container">
      <h1>Tambah Catatan</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>ID Kambing</label>
          <input type="text" name="idKambing" value={formData.idKambing} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Tanggal</label>
          <input type="date" name="tanggal" value={formData.tanggal} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Umur Kambing</label>
          <input type="number" name="umurKambing" value={formData.umurKambing} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Berat (Kg)</label>
          <input type="number" name="berat" value={formData.berat} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Jenis Kelamin</label>
          <select name="jenisKelamin" value={formData.jenisKelamin} onChange={handleChange}>
            <option value="">Pilih Jenis Kelamin</option>
            <option value="jantan">Jantan</option>
            <option value="betina">Betina</option>
          </select>
        </div>
        <div className="form-group">
          <label>Pakan</label>
          <select name="pakan" value={formData.pakan} onChange={handleChange}>
            <option value="">Pilih Jenis Pakan</option>
            <option value="rumput">Rumput</option>
            <option value="lainnya">Lainnya</option>
          </select>
        </div>
        <div className="form-group">
          <label>Jumlah Pakan</label>
          <input type="number" name="jumlahPakan" value={formData.jumlahPakan} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Catatan</label>
          <input type="text" name="catatan" value={formData.catatan} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Perawatan (Obat/Vaksin)</label>
          <input type="text" name="perawatan" value={formData.perawatan} onChange={handleChange} />
        </div>

        <div className="button-container">
          <button type="button" onClick={() => window.history.back()}>Batal</button>
          <button type="submit">Tambah</button>
        </div>
      </form>
    </div>
  );
};

export default FormTambahCatatan;
