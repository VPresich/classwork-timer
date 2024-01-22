const s=async t=>{try{const r=await fetch(t);if(!r.ok)throw new Error(`HTTP error, status: ${r.status}`);return r.json()}catch(r){console.log(r.message)}};export{s as f};
//# sourceMappingURL=fetch-data-async-fad340f3.js.map
