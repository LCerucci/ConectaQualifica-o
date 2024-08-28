function Footer() {
    return (
      <footer>
        <div>
          <img src={"path/to/image"} className="brsao-de-armas-img" aria-label="Rio Claro city crest" />
        </div>
        <div>
          <div>
            <h2>Ouvidoria Publica</h2>
            <p>
              <a href="tel:+551935267145">(19) 3526-7145</a>
            </p>
            <p>
              <a href="mailto:ouvidoria@rioclaro.sp.gov.br">ouvidoria@rioclaro.sp.gov.br</a>
            </p>
          </div>
          <div>
            <h2>Localização</h2>
            <p>Rua 3, 945 - Centro - CEP 13500-000 </p>
            <p>(Paço Municipal)</p>
            <p>Segunda a Sexta de 8h às 17h </p>
          </div>
          <div>
            <h2>Contato via WhatsApp</h2>
            <p>
              <a
                href="https://api.whatsapp.com/send/?phone=5519989119268&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Clique aqui!
              </a>
            </p>
          </div>
        </div>
      </footer>
    );
  }