<template>
<div>
 <section class="page-section" id="contact" aria-label="Formulario contacto">
        <br><br><br>
        <div class="container">
            <header class="text-center">
                <h1 class="section-heading text-uppercase">Si te quedo alguna duda, ¡Puedes contactarnos!</h1>
                <h2 class="section-subheading text-muted">Rellena las opciones aquí abajo</h2>
                <br><br><br>
            </header>
            <form id="contactForm" name="sentMessage" novalidate="novalidate">
                <div class="row align-items-stretch mb-5">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input class="form-control" id="name" type="text" placeholder="Nombre" required="required" data-validation-required-message="Please enter your name." />
                            <p class="help-block text-danger"></p>
                        </div>
                        <div class="form-group">
                            <input class="form-control" id="email" type="email" placeholder="Email *" required="required" data-validation-required-message="Please enter your email address." />
                            <p class="help-block text-danger"></p>
                        </div>
                        <div class="form-group mb-md-0">
                            <input class="form-control" id="phone" type="tel" placeholder="Móvil *" required="required" data-validation-required-message="Please enter your phone number." />
                            <p class="help-block text-danger"></p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group form-group-textarea mb-md-0">
                            <textarea class="form-control" id="message" placeholder="Mensaje*" required="required" data-validation-required-message="Please enter a message."></textarea>
                            <p class="help-block text-danger"></p>
                        </div>
                    </div>
                </div>
                <div class="text-center">
                    <div id="success"></div>
                    <button class="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Envía tu mensaje</button>
                    <br><br><br><br>
                </div>
            </form>
        </div>
    </section>
        </div>
</template>

<script>

</script>
 

<style>
section#contact {
    background-color: #212529;
    background-image: url("../assets/map-image.png");
    background-repeat: no-repeat;
    background-position: center;
}

section#contact .section-heading {
    color: #fff;
}

section#contact form#contactForm .form-group-textarea textarea {
    height: 100%;
    min-height: 10rem;
}

#sendMessageButton{
  background-color:  rgb(235, 188, 34);
  border: rgb(235, 188, 34);
  color: black;
}
</style>