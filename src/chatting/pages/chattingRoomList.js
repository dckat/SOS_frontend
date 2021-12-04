import { Button } from "@mui/material";
import TopLogo from "../../common/component/TopLogo";
import Footer from "../../common/component/Footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ChattingService from "../service";
import ChattingRoomItem from "./chattingRoomItem";

const ChattingRoomList = () => {
  const [chattingRoomList, setChattingRoomList] = useState([]);

  const getChattingRoomList = async () => {
    const response = await ChattingService.findChattingRoomList();
    setChattingRoomList(response.data.chattingRoomList);
  };

  useEffect(() => {
    getChattingRoomList();
  }, []);

  return (
    <>
      <div>
        <TopLogo />
        <div style={{ marginTop: 55, textAlign: "center", width: "100%" }}>
          <Button
            variant="contained"
            component={Link}
            to={"/chattingroomList"}
            style={styles.firstButton}
          >
            채팅
          </Button>
          <Button component={Link} to={"/userList"} style={styles.secondButton}>
            사람들
          </Button>
        </div>
        <div>
          {chattingRoomList.map((chattingRoom) => (
            <ChattingRoomItem
              id={chattingRoom.id}
              userId={chattingRoom.userId}
              userNickname={chattingRoom.userNickname}
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

export default ChattingRoomList;