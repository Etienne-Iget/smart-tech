import React from "react";

const CalltoActionSection = () => {
  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>Pour plus d'info</h2>
              <p>Entrez votre Email</p>
              <form className="form-section">
                <input placeholder=" Email..." name="email" type="email" />
                <input value="Plus d'info" name="subscribe" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoActionSection;
