import * as React from "react";
import { useParams } from "react-router-dom";
import List from "../../List";
import "./Item.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Avatar, Rating } from "@mui/material";
import { types, useAlert } from "react-alert";
import { auth, db } from "../../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import colRef from "../../firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";

//Fetching data from db
let revItems = [];
getDocs(colRef).then((snapshot) => {
  snapshot.docs.forEach((doc) => {
    revItems.push({ ...doc.data(), id: doc.id });
  });
});

const generateRecaptcha = () => {
  window.recaptchaVerifier = new RecaptchaVerifier(
    "recaptcha-container",
    {
      size: "invisible",
      callback: (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
      },
    },
    auth
  );
};
const Item = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 200,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const alert = useAlert();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open, setOpen] = React.useState(false);
  const items = List("all");
  const { id } = useParams();
  const [name, setName] = React.useState("");
  const [mobileNumber, setMobileNumber] = React.useState("");
  const [review, setReview] = React.useState("");
  const [stars, setStars] = React.useState("");
  const [otp, setOtp] = React.useState();
  const [otpView, setOtpView] = React.useState(false);

  const sendOtp = () => {
    if (
      name !== "" &&
      mobileNumber !== "" &&
      review !== "" &&
      mobileNumber.length === 10
    ) {
      generateRecaptcha();
      let appVerifier = window.recaptchaVerifier;
      setOtpView(true);
      signInWithPhoneNumber(auth, String("+91" + mobileNumber), appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
          setOtpView(true);
        })
        .catch((error) => {
          alert.show("Enter a Valid number or check your internet connection!");
          setOtpView(false);
          console.log(error);
        });
    } else {
      alert.show("Fill your information first", { type: types.INFO });
    }
  };

  const verifyOtp = async () => {
    if (otp.length === 6) {
      setOpen(false);
      window.confirmationResult
        .confirm(otp)
        .then((result) => {
          try {
            const docRef = addDoc(collection(db, "items"), {
              link: id,
              reviews: [{ name: name, review: review, stars: stars }],
            });
            alert.show("Review Added!", { type: types.SUCCESS });
          } catch (e) {
            alert.show("Couldn't add your review!");
          }
        })
        .catch((error) => {
          alert.show("Wrong OTP!", { type: types.ERROR });
          console.log(error);
        });
    }
  };
  return (
    <div className={`product`}>
      <div className="productBody">
        {items.map((item) => {
          if (item.link === id) {
            window.temp_item = item;
            return (
              <div className="productArea">
                <img src={`${item.images[0].url}`} />
                <div className="productInfo">
                  <h2>{item.name}</h2>
                  <p>???{item.price}</p>
                  <Button onClick={handleOpen} className="revBtn">
                    Write a review
                  </Button>
                </div>
              </div>
            );
          }
        })}
        <div className="productReview">
          <h2 className="homeh2">Reviews</h2>
          <div className="main_temp">
            {revItems.map((item) => {
              if (item.link == id) {
                return (
                  <div>
                    {item.reviews.map((review) => {
                      return (
                        <div className="productReviewCard">
                          <Avatar
                            src={`https://avatars.dicebear.com/api/human/${
                              review.stars * Math.floor(Math.random() * 5000)
                            }.svg`}
                          />
                          <div className="reviewInfo">
                            <h5>{review.name}</h5>
                            <Rating
                              name="read-only"
                              value={Number(review.stars)}
                              readOnly
                            />
                            <p> {review.review}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Write a review
            </Typography>
            <form>
              <label>
                Name:
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </label>
              <br />
              <label>
                Mobile Number:
                <input
                  type="number"
                  value={mobileNumber}
                  onChange={(event) => setMobileNumber(event.target.value)}
                />
              </label>
              <br />
              <label>
                Review:
                <textarea
                  value={review}
                  onChange={(event) => setReview(event.target.value)}
                />
              </label>
              <Typography component="legend">Ratings</Typography>
              <Rating
                name="simple-controlled"
                value={Number(stars)}
                onChange={(e) => {
                  setStars(e.target.value);
                }}
              />
              {otpView && (
                <>
                  <br />
                  <label>
                    OTP:
                    <input
                      type="text"
                      value={otp}
                      onChange={(event) => setOtp(event.target.value)}
                    />
                  </label>
                  <Button
                    onClick={verifyOtp}
                    style={{
                      marginTop: "5px",
                    }}
                  >
                    Verify
                  </Button>
                </>
              )}
              <br />
              <Button
                onClick={sendOtp}
                style={{
                  marginTop: "1vmax",
                  backgroundColor: "green",
                  color: "white",
                }}
              >
                Submit
              </Button>
            </form>
          </Box>
        </Modal>
      </div>
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default Item;
