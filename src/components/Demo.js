function Demo(props) { //propeties
  const s = props.data;
  return (
    <div>
      <h1>Xin chao: {s.name}, so dien thoai: {s.tel}</h1>
      <h2>Email:{s.email}</h2>
      <h3>Adress: {s.address}</h3>
    </div>
  );
}
export default Demo;
