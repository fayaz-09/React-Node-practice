import React from "react";
import { Link } from "react-router-dom";
import Edit from "./edit.png";
import Delete from "./delete.png"
import Menu from "../components/Menu"

const Single = () => {
    return (
        <div className="single">
            <div className="content">
                <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                <div className="user">
                    <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""/>
                    <div className="info">
                        <span>John</span>
                        <p>Posted 2 days ago</p>
                    </div>
                    <div className="edit">
                        <Link to={'/write?edit=2'}>
                            <img src={Edit} alt="" />
                        </Link>
                        <img src={Delete} alt="" />
                    </div>
                </div>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Sed viverra tellus in hac habitasse platea.
                    <br/>
                    <br/>
                    Vulputate ut pharetra sit amet aliquam id diam. Est velit egestas dui id ornare arcu odio. Sagittis orci a scelerisque purus semper eget duis. Habitant morbi tristique senectus et. Tellus mauris a diam maecenas sed enim ut. Mattis rhoncus urna neque viverra justo nec ultrices dui sapien. 
                    <br/>
                    <br/>
                    Turpis cursus in hac habitasse. Ullamcorper dignissim cras tincidunt lobortis. Eget nunc lobortis mattis aliquam faucibus purus in massa tempor. Faucibus et molestie ac feugiat sed. Amet luctus venenatis lectus magna fringilla urna. Faucibus turpis in eu mi bibendum neque egestas congue. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Mattis aliquam faucibus purus in massa tempor nec. Vitae turpis massa sed elementum.
                    <br/>
                    <br/>
                    Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. A pellentesque sit amet porttitor eget dolor morbi. Malesuada fames ac turpis egestas integer eget aliquet nibh. Massa eget egestas purus viverra accumsan in nisl nisi. Lacus luctus accumsan tortor posuere. Sit amet mattis vulputate enim nulla. Massa massa ultricies mi quis hendrerit. Duis at tellus at urna condimentum mattis pellentesque id. Nisi lacus sed viverra tellus in hac habitasse platea. Urna id volutpat lacus laoreet non curabitur gravida arcu. Sit amet est placerat in egestas erat imperdiet.
                    <br/>
                    <br/>
                </p>
            </div>
            <Menu/>
        </div>
    )
}

export default Single;