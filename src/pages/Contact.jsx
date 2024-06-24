import { useState } from "react";

const Contact = () => {
    const [isBot, setIsBot] = useState("");

    const handleBotCheck = () => {
        setIsBot("/contact_form.php")
    }

    return (
        <>
            <h2 className="mb-3">Kontaktformular</h2>
            <form className="row g-3" method="GET" action={isBot} onMouseMove={handleBotCheck}>
                <div className="col-md-6">
                    <label htmlFor="firstname" className="form-label fw-bold">Vorname</label>
                    <input type="text" className="form-control" id="firstname" name="firstname" placeholder="Max" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="lastname" className="form-label fw-bold">Nachname</label>
                    <input type="text" className="form-control" id="lastname" name="lastname" placeholder="Mustermann" />
                </div>
                <div className="col-12">
                    <label htmlFor="email" className="form-label fw-bold">E-Mail-Adresse</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="ntuzer@beispiel.de" />
                </div>
                <div className="col-12">
                    <label htmlFor="reference" className="form-label fw-bold">Betreff</label>
                    <input type="email" className="form-control" id="reference" name="reference" placeholder="Betreff ..." />
                </div>
                <div className="col-12">
                    <label htmlFor="issue" className="form-label fw-bold">Dein Anliegen</label>
                    <textarea className="form-control" id="issue" name="issue" rows="10" placeholder="Sehr geehrter Herr Binkert, ..."></textarea>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Abschicken</button>
                </div>
            </form>
        </>
    );
};

export default Contact;
