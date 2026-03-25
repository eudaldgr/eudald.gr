+++
template = "homepage.html"
+++

<style>
.homepage-hero {
    text-align: center;
    padding: 2rem 0;
}

.homepage-hero-title {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.homepage-hero-subtitle {
    font-size: 1.25rem;
    margin-bottom: 1rem;

</style>

<div class="homepage-hero">
    <h1 class="homepage-hero-title">Hola, sóc l'Eudald 👋</h1>
    <p class="homepage-hero-subtitle">Sóc un desenvolupador de programari apassionat per l'open source i la tecnologia.</p>
</div>

{% character(name="hooded") %}
M'agrada escriure sobre els meus projectes, experiències i aprenentatges en el món del desenvolupament, la seguretat, el DevOps i la infraestructura.
{% end %}

{% character(name="hooded", position="left") %}
A més a més, gaudeixo cuinant, explorant la natura a través del senderisme i jugant a jocs de taula.
{% end %}
