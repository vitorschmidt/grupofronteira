<script setup lang="ts">
import Header from '@/components/Header.vue'
import { colors } from '@/styles/colors'
import { onMounted } from 'vue'

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
    <div class="marca-page">
        <Header />
        
        <!-- Seção Marca -->
        <section id="marca" class="marca-section">
            <div class="container">
                <div class="marca-content">
                    <div class="marca-image animate-on-scroll">
                        <img src="@/assets/placa-e-logo.jpg" alt="Placa e Logo Grupo Fronteira" />
                    </div>
                    
                    <div class="marca-text animate-on-scroll">
                        <h1>Conceito da Marca</h1>
                        <div class="text-content">
                            <p>
                                A nova identidade visual da marca, assim como o elemento que acompanha o lettering, 
                                segue o briefing pedido pelo cliente. A escrita do nome <strong>FRONTEIRA</strong> segue a essência 
                                da empresa, está em caixa alta e é robusta, sem ser vazada.
                            </p>
                            
                            <p>
                                A cor principal escolhida é o <span class="highlight">amarelo</span> que contrasta com o preto. 
                                Em um tom mais moderno, essa cor representa <strong>segurança</strong>, <strong>otimismo</strong> e <strong>vibração</strong>.
                            </p>
                            
                            <p>
                                Já o elemento de apoio ao lettering, é uma versão atualizada do modelo antigo usado pela empresa. 
                                Com um traçado mais grosso, representamos os núcleos da empresa em cada círculo, que juntos, 
                                representam todas as áreas de atuação do <strong>GRUPO FRONTEIRA</strong> que o mesmo sempre 
                                entregou com excelência.
                            </p>
                        </div>
                        
                        <div class="brand-values animate-on-scroll">
                            <div class="value">
                                <div class="value-icon">
                                    <v-icon color="primary" size="large">mdi-shield-check</v-icon>
                                </div>
                                <h3>Segurança</h3>
                            </div>
                            <div class="value">
                                <div class="value-icon">
                                    <v-icon color="primary" size="large">mdi-lightbulb-on</v-icon>
                                </div>
                                <h3>Otimismo</h3>
                            </div>
                            <div class="value">
                                <div class="value-icon">
                                    <v-icon color="primary" size="large">mdi-pulse</v-icon>
                                </div>
                                <h3>Vibração</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.marca-page {
    min-height: 100vh;
    padding-top: 80px;
    background: linear-gradient(135deg, v-bind('colors.gray[50]') 0%, v-bind('colors.secondary') 100%);
}

.marca-section {
    padding: 5rem 0;
    min-height: calc(100vh - 80px);
    display: flex;
    align-items: center;
}

.container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
}

.marca-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
}

.marca-image {
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.marca-image img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s ease;
}

.marca-image:hover img {
    transform: scale(1.05);
}

.marca-text {
    padding: 2rem;
}

.marca-text h1 {
    font-size: 3rem;
    font-weight: 700;
    color: v-bind('colors.primary');
    margin-bottom: 2rem;
    line-height: 1.2;
}

.text-content {
    margin-bottom: 3rem;
}

.text-content p {
    font-size: 1.2rem;
    line-height: 1.8;
    color: v-bind('colors.gray[700]');
    margin-bottom: 1.5rem;
}

.text-content strong {
    color: v-bind('colors.primary');
    font-weight: 600;
}

.highlight {
    background: linear-gradient(120deg, v-bind('colors.primary') 0%, v-bind('colors.primaryLight') 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
    font-size: 1.1em;
}

.brand-values {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 3rem;
}

.value {
    text-align: center;
    padding: 1.5rem;
    background: v-bind('colors.white');
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
}

.value:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.value-icon {
    margin-bottom: 1rem;
}

.value h3 {
    color: v-bind('colors.primary');
    font-size: 1.3rem;
    font-weight: 600;
    margin: 0;
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

/* Responsividade */
@media (max-width: 1024px) {
    .marca-content {
        grid-template-columns: 1fr;
        gap: 3rem;
        text-align: center;
    }
    
    .marca-text h1 {
        font-size: 2.5rem;
    }
    
    .text-content p {
        font-size: 1.1rem;
    }
}

@media (max-width: 768px) {
    .marca-page {
        padding-top: 100px;
    }
    
    .marca-section {
        padding: 3rem 0;
        min-height: auto;
    }
    
    .container {
        padding: 0 1rem;
    }
    
    .marca-content {
        gap: 2rem;
    }
    
    .marca-text {
        padding: 1rem;
    }
    
    .marca-text h1 {
        font-size: 2rem;
    }
    
    .text-content p {
        font-size: 1rem;
    }
    
    .brand-values {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
}

@media (max-width: 480px) {
    .marca-page {
        padding-top: 140px;
    }
    
    .marca-text h1 {
        font-size: 1.8rem;
    }
    
    .text-content p {
        font-size: 0.95rem;
        line-height: 1.6;
    }
    
    .value {
        padding: 1rem;
    }
}

@media (prefers-reduced-motion: reduce) {
    .animate-on-scroll {
        transition: none;
    }
    
    .marca-image img {
        transition: none;
    }
}
</style>