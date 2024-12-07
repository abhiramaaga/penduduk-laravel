import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Bantul', population: 950000 },
  { name: 'Sleman', population: 1180000 },
  { name: 'Gunungkidul', population: 730000 },
  { name: 'Kulon Progo', population: 430000 },
  { name: 'Yogyakarta', population: 400000 },
];

export default class KabupatenChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          {/* Sumbu X untuk nama kabupaten */}
          <XAxis dataKey="name" stroke="#8884d8" />
          {/* Sumbu Y untuk jumlah penduduk */}
          <YAxis />
          {/* Tooltip untuk detail data */}
          <Tooltip />
          {/* Batang chart */}
          <Bar dataKey="population" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
