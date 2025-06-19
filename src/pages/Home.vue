<script setup lang="ts">
import Header from '@/components/Header.vue'
import ImageCarousel from '@/components/ImageCarrousel.vue'
import { colors } from '@/styles/colors'
import { onMounted } from 'vue'

// Função para observar elementos e aplicar animações de scroll
onMounted(() => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in')
            } else {
                entry.target.classList.remove('animate-in')
            }
        })
    }, observerOptions)

    const animatedElements = document.querySelectorAll('.animate-on-scroll')
    animatedElements.forEach(el => observer.observe(el))
})
</script>

<template>
    <div class="home-page">
        <Header />

        <!-- Seção Home/Hero -->
        <section id="home" class="home-section">
            <ImageCarousel />

            <div class="hero-content">
                <h1>Bem-vindo ao Grupo Fronteira</h1>
                <p>Sua segurança é nossa prioridade. Descubra como podemos proteger o que é mais importante para você com nossos serviços especializados em segurança privada, vigilância e proteção pessoal.</p>
            </div>
        </section>

        <!-- Seção Sobre -->
        <section id="sobre" class="section">
            <div class="container">
                <h2>Sobre Nós</h2>
                <p>Conheça mais sobre o Grupo Fronteira e nossa trajetória de excelência em serviços especializados.</p>

                <div class="features">
                    <img src="@/assets/placa-e-logo.jpg" alt="Placa e Logo Grupo Fronteira" class="feature-image animate-on-scroll">
                    <div class="feature-card animate-on-scroll">
                        <p>Com mais de 10 anos de atuação no mercado, somos especializados em vigilância armada, escolta armada
                            e segurança pessoal privada. Contamos com ampla experiência na prestação de serviços no setor.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Seção Serviços -->
        <section id="servicos" class="section alt-bg">
            <div class="container">
                <h2 style="color: #231f20;">Nossos Serviços</h2>
                <p>Oferecemos uma ampla gama de serviços especializados para atender suas necessidades.</p>
                
                <div class="services-grid">
                    <div class="service-card animate-on-scroll" style="animation-delay: 0.1s;">
                        <v-icon class="service-icon" color="primary">mdi-shield-account</v-icon>
                        <h3>Vigilância Armada</h3>
                        <p>Serviços especializados de vigilância armada com profissionais altamente treinados e certificados para garantir máxima segurança.</p>
                    </div>
                    <div class="service-card animate-on-scroll" style="animation-delay: 0.7s;">
                        <v-icon class="service-icon" color="primary">mdi-car-arrow-right</v-icon>
                        <h3>Escolta Armada</h3>
                        <p>Proteção e escolta especializada para pessoas e cargas, oferecendo segurança durante deslocamentos e transportes.</p>
                    </div>
                    <div class="service-card animate-on-scroll" style="animation-delay: 0.8s;">
                        <v-icon class="service-icon" color="primary">mdi-account-tie</v-icon>
                        <h3>Segurança Pessoal</h3>
                        <p>Serviços de segurança pessoal privada com profissionais especializados em proteção individual e familiar.</p>
                    </div>
                    <div class="service-card animate-on-scroll" style="animation-delay: 0.2s;">
                        <v-icon class="service-icon" color="primary">mdi-shield-outline</v-icon>
                        <h3>Auxiliar de Vigilância Privada</h3>
                        <p>Serviços de vigilância especializada com profissionais qualificados para garantir a segurança do seu patrimônio.</p>
                    </div>
                    <div class="service-card animate-on-scroll" style="animation-delay: 0.3s;">
                        <v-icon class="service-icon" color="primary">mdi-door-open</v-icon>
                        <h3>Portaria</h3>
                        <p>Controle de acesso e recepção profissional para empresas, condomínios e estabelecimentos comerciais.</p>
                    </div>
                    <div class="service-card animate-on-scroll" style="animation-delay: 0.4s;">
                        <v-icon class="service-icon" color="primary">mdi-broom</v-icon>
                        <h3>Limpeza e Asseio</h3>
                        <p>Serviços completos de limpeza e conservação para manter seu ambiente sempre limpo e organizado.</p>
                    </div>
                    <div class="service-card animate-on-scroll" style="animation-delay: 0.5s;">
                        <v-icon class="service-icon" color="primary">mdi-phone-in-talk</v-icon>
                        <h3>Recepcionista</h3>
                        <p>Atendimento profissional e qualificado para receber seus clientes e visitantes com excelência.</p>
                    </div>
                    <div class="service-card animate-on-scroll" style="animation-delay: 0.6s;">
                        <v-icon class="service-icon" color="primary">mdi-clipboard-text</v-icon>
                        <h3>Administrativos</h3>
                        <p>Suporte administrativo especializado para otimizar processos e aumentar a eficiência da sua empresa.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="setores" class="section setores-bg">
            <div class="container">
                <h2 style="color: #ffff;">Setores de Atuação</h2>
                <div class="services-grid">
                    <div class="setor-card animate-on-scroll" style="animation-delay: 0.1s;">
                        <h3>Privado</h3>
                        <v-icon class="setor-icon" >mdi-shield-account</v-icon>
                    </div>
                    <div class="setor-card animate-on-scroll" style="animation-delay: 0.2s;">
                        <h3>Hospitalar</h3>
                        <v-icon class="setor-icon" >mdi-hospital-building</v-icon>
                    </div>
                    <div class="setor-card animate-on-scroll" style="animation-delay: 0.3s;">
                        <h3>Público</h3>
                        <v-icon class="setor-icon" >mdi-city</v-icon>
                    </div>
                </div>
            </div>
        </section>

        <!-- Seção Contato -->
        <section id="contato" class="section">
            <div class="container">
                <h2>Entre em Contato</h2>
                <p>Estamos prontos para atender você. Entre em contato conosco!</p>

                <div class="contact-info">
                    <div class="contact-item animate-on-scroll" style="animation-delay: 0.1s;">
                        <v-icon class="contact-icon" color="primary">mdi-phone</v-icon>
                        <h4>Telefone</h4>
                        <p>(51) 3238-0136</p>
                    </div>
                    <div class="contact-item animate-on-scroll" style="animation-delay: 0.2s;">
                        <v-icon class="contact-icon" color="primary">mdi-email</v-icon>
                        <h4>E-mail</h4>
                        <p>contato@grupofronteira.com.br</p>
                    </div>
                    <div class="contact-item animate-on-scroll" style="animation-delay: 0.3s;">
                        <v-icon class="contact-icon" color="primary">mdi-map-marker</v-icon>
                        <h4>Endereço</h4>
                        <p>RUA ERNESTO DA FONTOURA  - 508</p>
                        <p>PORTO ALEGRE/RS </p>
                        <p>Bairro: SÃO GERALDO</p>
                        <p>CEP: 90230-150</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.home-page {
    min-height: 100vh;
    padding-top: 80px;
}

.home-section {
    padding-top: 0;
    margin-top: -80px;
}

.hero-content {
    text-align: center;
    padding: 4rem 2rem;
    background-color: v-bind('colors.primary');
}

.hero-content h1 {
    font-size: 3rem;
    color: v-bind('colors.secondary');
    margin-bottom: 1rem;
    font-weight: 700;
}

.hero-content p {
    font-size: 1.2rem;
    color: v-bind('colors.gray[600]');
    max-width: 600px;
    margin: 0 auto;
}

.section {
    padding: 5rem 0;
    min-height: 60vh;
}

.alt-bg {
    background-color: v-bind('colors.gray[50]');
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

.section h2 {
    font-size: 2.5rem;
    color: v-bind('colors.white');
    text-align: center;
    margin-bottom: 1rem;
    font-weight: 700;
}

.section p {
    font-size: 1.1rem;
    color: v-bind('colors.gray[600]');
    text-align: center;
    max-width: 800px;
    margin: 0 auto 3rem;
    line-height: 1.6;
}

.features,
.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
    justify-content: space-between;
}

/* Animações de scroll */
.animate-on-scroll {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.animate-on-scroll.animate-in {
    opacity: 1;
    transform: translateY(0);
}

.feature-card,
.service-card {
    background: v-bind('colors.secondary');
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
    text-align: center;
    transition: all 0.3s ease;
    border: 2px solid transparent;
    cursor: pointer;
}

.feature-card:hover,
.service-card:hover {
    transform: translateY(-5px);
    border-color: v-bind('colors.secondary');
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.feature-card h3,
.service-card h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: v-bind('colors.primary');
}

.feature-image {
    width: 100%;
    height: 100%;
    min-height: 200px;
    object-fit: cover;
    border-radius: 8px;
}

.feature-card p,
.service-card p {
    color: v-bind('colors.gray[600]');
    line-height: 1.6;
}

.contact-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.contact-item {
    text-align: center;
    padding: 2rem;
    background: v-bind('colors.white');
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    cursor: pointer;
}

.contact-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.contact-item h4 {
    color: v-bind('colors.primary');
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    font-family: 'Rubik', sans-serif;
    font-weight: 600;
}

.contact-item p {
    color: v-bind('colors.gray[600]');
    margin: 0;
    font-family: 'Open Sans', sans-serif;
}

.contact-icon {
    font-size: 2.5rem !important;
    margin-bottom: 1rem;
    display: block;
}

.service-icon {
    font-size: 3rem !important;
    margin-bottom: 1rem;
    display: block;
}

.setores-bg {
    background-color: v-bind('colors.primary');
}

.setor-card {
    background-color: v-bind('colors.primaryLight');
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
    text-align: center;
    transition: all 0.3s ease;
    border: 2px solid transparent;
}

.setor-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
}

.setor-card h3 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: v-bind('colors.secondary');
    font-weight: 600;
}

.setor-icon {
    font-size: 4rem !important;
    margin-top: 1rem;
    display: block;
    color: v-bind('colors.secondary');
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 3rem;
}

/* Posicionar os últimos dois cards especificamente */
.service-card:nth-child(7) {
    grid-column: 1;
}

.service-card:nth-child(8) {
    grid-column: 3;
}

/* Responsividade */
@media (max-width: 768px) {
    .home-page {
        padding-top: 100px;
    }

    .home-section {
        margin-top: -100px;
    }

    .hero-content h1 {
        font-size: 2.5rem;
    }

    .hero-content p {
        font-size: 1.1rem;
    }

    .section h2 {
        font-size: 2rem;
    }

    .features,
    .services-grid,
    .contact-info {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    .section {
        padding: 3rem 0;
    }

    /* Remover posicionamento específico em mobile */
    .service-card:nth-child(7),
    .service-card:nth-child(8) {
        grid-column: auto;
    }
}

@media (max-width: 480px) {
    .home-page {
        padding-top: 140px;
    }

    .home-section {
        margin-top: -140px;
    }

    .hero-content h1 {
        font-size: 2rem;
    }

    .hero-content {
        padding: 3rem 1.5rem;
    }

    .container {
        padding: 0 1rem;
    }
}

/* Melhorias para animações móveis */
@media (prefers-reduced-motion: reduce) {
    .animate-on-scroll {
        transition: none;
    }
}
</style>