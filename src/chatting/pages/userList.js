import { Button } from "@mui/material";
import TopLogo from "../../common/component/TopLogo";
import Footer from "../../common/component/Footer";
import { Link } from "react-router-dom";
import ChattingService from "../service";
import { useEffect, useState } from "react";
import UserItem from "./userItem";

const UserList = () => {
  const [userList, setUserList] = useState([]);

  const getUserList = async () => {
    const response = await ChattingService.findUserList();
    setUserList(response.data.userList);
  };

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <>
      <div>
        <TopLogo />
        <div style={{ marginTop: 55, textAlign: "center", width: "100%" }}>
          <Button
            component={Link}
            to={"/chattingroomList"}
            style={styles.firstButton}
          >
            채팅
          </Button>
          <Button
            variant="contained"
            component={Link}
            to={"/userList"}
            style={styles.secondButton}
          >
            사람들
          </Button>
        </div>
        <div>
          {userList.map((user) => (
            <UserItem
              id={user.id}
              email={user.email}
              name={user.name}
              nickname={user.nickname}
            />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

const styles = {
  firstButton: {
    height: "99%",
    width: "49%",
    margin: "0.5%",
  },
  secondButton: {
    height: "99%",
    width: "49%",
    margin: "0.5%",
  },
};

export default UserList;