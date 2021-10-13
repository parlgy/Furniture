import React from "react";
import "../../App.css";
import "./Contact.css";
import { Button } from "@material-ui/core";
import { FormControl, TextField } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Footer from "../Footer";

const Contact = () => {
  return (
    <>
      <div className="cover">
        {/* <img src="/images/fun2.jpg" alt="" /> */}
        <Grid item xs={12} sm={6}>
          <div className="contact-back">
            <h1>Contact Us</h1>
            <p>
              Please send your message below. we will get to you the earliest!
            </p>
            <h4>Message:</h4>
            <FormControl className="form" style={{ margin: "30px" }}>
              <TextField
                id="Message-section"
                label="Your Message"
                variant="outlined"
              />
              <div className="inputs-flex">
                <TextField
                  id="Email-section"
                  label="Your Email"
                  variant="outlined"
                />
                <TextField
                  id="Number-section"
                  label="Your number"
                  variant="outlined"
                />
              </div>
              <div className="btn-send">
                <Button
                  className="send-btn"
                  variant="contained"
                  style={{
                    width: "20px",
                    backgroundColor: "black",
                    color: "white",
                  }}
                >
                  Send
                </Button>
              </div>
            </FormControl>
          </div>
        </Grid>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Contact;
