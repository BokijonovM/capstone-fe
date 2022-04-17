import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import Avatar from "@mui/material/Avatar";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { PaperClipIcon } from "@heroicons/react/solid";
import { AnimatePresence } from "framer-motion";
import {
  ToggleBtn,
  ModalBox,
  ModalContent,
  ModalContainer,
} from "./ModalStyle";

function Applicant({ userId }) {
  // modal

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(userId);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const myToken = localStorage.getItem("MyToken");
  const dataJson = JSON.parse(JSON.stringify(myToken));

  const fetchUser = async () => {
    try {
      let res = await fetch(
        `${process.env.REACT_APP_API_MAIN_URL}/users/${userId}`,
        {
          headers: {
            authorization: dataJson,
          },
        }
      );
      if (res.ok) {
        let data = await res.json();
        setUser(data);
        console.log("data user", data);
        setIsLoading(false);
      } else {
        console.log("fetch user error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="w-100">
      {isLoading ? (
        ""
      ) : (
        <div className="w-100">
          <div className="d-flex align-items-center w-100 applicant-user-div py-2 px-3">
            <Avatar alt={user.firstName} src="/static/images/avatar/1.jpg" />
            <h6 className="mb-0 ml-2">{user.firstName}</h6>
            <Tooltip title="View" placement="top">
              <VisibilityIcon
                className="ml-auto quick-view-applicant"
                onClick={handleOpen}
              />
            </Tooltip>
          </div>
        </div>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="border-0"
        // animation={true}
      >
        {isLoading ? (
          ""
        ) : (
          <ModalBox
            initial={{ opacity: 0, y: 60, scale: 0.5 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              // making use of framer-motion spring animation
              // with stiffness = 300
              transition: { type: "spring", stiffness: 300 },
            }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.6 } }}
          >
            <div
              className="quick-view-applicant-modal border-0 w-100"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { delay: 0.5 } }}
            >
              <div
                className="bg-white shadow d-flex flex-column w-100 justify-content-center overflow-hidden  sm:rounded-lg"
                style={{ height: "100%" }}
              >
                <div className="d-flex align-items-center px-4 py-2 sm:px-6">
                  <div className=" ">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Applicant Information
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      Personal details and application.
                    </p>
                  </div>
                  <Avatar
                    className="ml-auto mb-4"
                    alt={user.firstName}
                    src={user.image}
                  />
                </div>
                <div className="border-t border-gray-200">
                  <dl>
                    <div className="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Full name
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {user.firstName} {user.lastName}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Applicant title
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {user.title ? user.title : "Developer"}
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Email address
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        {user.email ? user.email : "Not Provided"}
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Salary expectation
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        $120,000
                      </dd>
                    </div>

                    <div className="bg-white px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Attachments
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <ul
                          role="list"
                          className="border border-gray-200 rounded-md divide-y divide-gray-200"
                        >
                          <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                            <div className="w-0 flex-1 flex items-center">
                              <PaperClipIcon
                                className="flex-shrink-0 h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                              <span className="ml-2 flex-1 w-0 truncate">
                                resume_back_end_developer.pdf
                              </span>
                            </div>
                            <div className="ml-4 flex-shrink-0">
                              <a
                                href="#"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                              >
                                Download
                              </a>
                            </div>
                          </li>
                        </ul>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </ModalBox>
        )}
      </Modal>
    </div>
  );
}

export default Applicant;
