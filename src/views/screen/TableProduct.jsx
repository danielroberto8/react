import React from "react";

const Table = () => {
  let tableData = [
    { nama: "Ricardo", pekerjaan: "Tukang Kebun" },
    { nama: "Layla", pekerjaan: "Marksman" },
  ];
  const RenderTable = () => {
    let res = "www";
    // for(let i=0;i<tableData.length;i++){
    //     res+=`<tr>$
    //         </tr>`
    // }
    return res;
  };
  return (
    <div>
      <table>
        <thead>
          <th>No</th>
          <th>Nama</th>
          <th>Pekerjaan</th>
        </thead>
        <tbody>
          {tableData.map((val, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{val.nama}</td>
                <td>{val.pekerjaan}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
