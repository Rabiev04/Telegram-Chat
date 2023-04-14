export default function UserHeader({ pickedUser }) {
  return (
    <div className="user_header_box">
      {/* <div className="user_header_img">{pickedUser.img}</div> */}
      <div className="user_header_name">{pickedUser.name}</div>
    </div>
  );
}
