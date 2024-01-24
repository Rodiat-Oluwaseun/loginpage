import styled from  "styled-components";
import img from '../Images/amplifliyImage.jpeg';

export const Wrapper = styled.div`
padding: 4em;
border: 1px solid #000;
background-size: cover;
// background-image: url(${img});
background-position: center;
height: 100vh; 
display: flex;
justify-content: center;
align-items: center;

.form{
   box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

  .input-box{
    background: black;
    width: 100%;
    height: 50px;
    margin: 30px 0;
    border-radius: 40px;
    background: transparent;
    border: none;
    outline: none;
    border: 2px solid grey;
    font-size: 16px;
    padding: 20px 45px 20px 20px;
    
}

  .icon{
    position: absolute;
    right:-120px;
   //  top: 100%;
    transform: translative(-20%);
    font-size : 16px;

 }

 .checkBox{
    display: flex;
    justify-content:flex-end;
    font-size: 13px;
    margin: -15px 0 15px;

 }
 .submit{
    width:100px;
    height:45px;
    border: none;
    outline: none;
    border-radius:40px;
    margin-bottom: 10px;

 }
 .email {
   float:left;
   margin-right:20px
 }

.password{
   float:left;
   margin-right:20px

}

    @media (max-width: 1000px) {
    }
`;







