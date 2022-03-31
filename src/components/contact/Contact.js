import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import Collapse from "./Collapse";
import { AddressData } from "./data/AddressData"; //cet import permet de récupérer mes données dans le fichier AdressData
import { QuestionData } from "./data/QuestionData"; //cet import permet de récupérer mes données dans le fichier QuestionData
import Form from "./Form";
import Layout from "../Layout";

const Contact = () => {
  const [adressData] = useState(AddressData);
  const [questionData] = useState(QuestionData);

  const { t } = useTranslation();

  return (
    <Layout>
      <div className="block ">
        <div className="block w-screen sm:w-full">
          <iframe
            className="w-screen "
            title="la localisation"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11757.487118051042!2d11.529617718601685!3d3.882714499745933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bc596d33e5b29%3A0x93d8de55c6ff0e81!2sSODEPA!5e0!3m2!1sfr!2sfr!4v1648138761212!5m2!1sfr!2sfr"
            height={400}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
        <div className="block mt-16  w-4/5 mx-auto">
          <h1 className="text-2xl font-bold  text-black-600">
            {t("contact.title_1")}
          </h1>
          <p className="text-basetext-gray-500 mt-2  leading-loose text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consectetur quod dolorum temporibus, doloremque veritatis deleniti
            totam dolorem unde quam ab sint blanditiis corporis hic mollitia et
            explicabo magni, vitae distinctio. ipsum dolor sit amet consectetur
            adipisicing elit. Voluptate ipsam, nesciunt obcaecati laboriosam
            iusto quos !
          </p>
        </div>
        <div className="lg:flex md:grid-cols-4 justify-center mt-16  w-4/5 h-50 mx-auto ">
          {adressData.map((adress) => (
            <div className=" basis-1/4" key={adress.id}>
              {/* className="w-20 mx-auto mb-6" */}
              <div className="w-12 mx-auto mb-6">{adress.icon}</div>

              <h4 className="text-xl font-bold  text-black-600 text-center">
                {adress.name}
              </h4>
              <p className="text-base text-gray-500 mt-1 text-center">
                {adress.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 border-b-2 w-4/5 mx-auto "></div>

        <div className="lg:flex flex-row mt-20 w-4/5 h-000 mx-auto md:block sm:block">
          <Form />
          <div className="basis-1/2 ">
            <h1 className="text-2xl font-bold  text-dark-low ml-8">
              Les questions les plus fréquentes
            </h1>
            <div className="mt-8">
              {questionData.map((ask) => (
                <Collapse key={ask.id} title={ask.title}>
                  {ask.children}
                </Collapse>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
