import React from 'react';

const Pagination = ({ page, totalPages, onChange }) => {
  const prev = () => onChange(Math.max(0, page - 1));
  const next = () => onChange(Math.min(totalPages - 1, page + 1));

  return (
    <div style={{display:'flex',gap:8,alignItems:'center',justifyContent:'flex-end',marginTop:12}}>
      <button onClick={prev} disabled={page === 0}>Prev</button>
      <div>Page {page+1} / {totalPages}</div>
      <button onClick={next} disabled={page >= totalPages-1}>Next</button>
    </div>
  );
};

export default Pagination;
