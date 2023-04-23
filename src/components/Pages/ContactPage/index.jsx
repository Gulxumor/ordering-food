import { Button, Input } from "antd";
import React from "react";
import Footer from "../../Footer";
import { Toptext } from "../../Footer/style";
import { Img, Section, Wrapper, InputWrapper } from "./style";
import location from "../../../assets/images/compLocation.jpg";
import ContactTop from "./ContactTop";
const ContactPage = () => {
  return (
    <>
      <ContactTop />
      <Section>
        <Wrapper>
          <Wrapper.Wrapper>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              architecto eum totam non exercitationem illum nisi sequi atque
              blanditiis ea? Officiis culpa vero est adipisci?
            </p>
            <p>
              <Toptext>Email:</Toptext> example@gmail.com
            </p>
            <p>
              <Toptext>Phone:</Toptext>+3584573968551
            </p>
            <Toptext>Naples Office:</Toptext>
            <p> ZindaBazar, Sylhet-3100, Bangladesh</p>
            <ul>
              What you get when asking your question
              <li>Less than 12 hours response to your question </li>
              <li>
                Thoroughtness and expertise and a Certified Exchange Specialist
              </li>
              <li>Plan of action summarized in an email follow up</li>
            </ul>
            <InputWrapper>
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Password" />
              <Button>Send</Button>
            </InputWrapper>
          </Wrapper.Wrapper>
          <Img src={location} alt="location" />
        </Wrapper>
      </Section>
      <Footer />
    </>
  );
};

export default ContactPage;
