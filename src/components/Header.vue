<script setup lang="ts">
import { colors } from '@/styles/colors'
import { useRouter } from 'vue-router'

const router = useRouter()

const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (element) {
    const headerHeight = 80 
    const elementPosition = element.offsetTop - headerHeight
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    })
  }
}

const handleNavClick = (event: Event, targetId: string) => {
  event.preventDefault()
  
  if (targetId === 'marca') {
    // Navegar para a página Marca
    router.push('/marca')
  } else if (targetId === 'home') {
    // Navegar para a página Home
    router.push('/')
  } else {
    // Scroll para seção na página atual (se estivermos na Home)
    if (router.currentRoute.value.name === 'Home') {
      smoothScrollTo(targetId)
    } else {
      // Se não estivermos na Home, vamos para Home e depois fazemos scroll
      router.push(`/#${targetId}`)
    }
  }
}
</script>

<template>
  <header class="header">
    <div class="header-container">
      <div class="logo-container">
        <img 
          src="/src/assets/logo-s-fundo.png" 
          alt="Grupo Fronteira" 
          class="logo"
          @click="handleNavClick($event, 'home')"
        />
      </div>
      
      <nav class="navigation">
        <ul class="nav-list">
          <li><a href="/" class="nav-link" @click="handleNavClick($event, 'home')">Home</a></li>
          <li><a href="/#sobre" class="nav-link" @click="handleNavClick($event, 'sobre')">Sobre</a></li>
          <li><a href="/#servicos" class="nav-link" @click="handleNavClick($event, 'servicos')">Serviços</a></li>
          <li><a href="/marca" class="nav-link" @click="handleNavClick($event, 'marca')">Marca</a></li>
          <li><a href="/#contato" class="nav-link" @click="handleNavClick($event, 'contato')">Contato</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  background-color: v-bind('colors.secondary');
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 80px;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  height: 180px;
  width: auto;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.logo:hover {
  transform: scale(1.05);
}

.navigation {
  display: flex;
  align-items: center;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.nav-link {
  color: v-bind('colors.primary');
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -5px;
  left: 50%;
  background-color: v-bind('colors.primary');
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link:hover {
  transform: translateY(-2px);
}

/* Responsividade */
@media (max-width: 768px) {
  .header-container {
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    height: auto;
    min-height: 100px;
  }
  
  .logo {
    height: 50px;
  }
  
  .nav-list {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .nav-link {
    font-size: 1rem;
    padding: 0.4rem 0.8rem;
  }
}

@media (max-width: 480px) {
  .nav-list {
    flex-direction: column;
    gap: 0.3rem;
    text-align: center;
  }
  
  .nav-link {
    width: 100%;
    display: block;
    padding: 0.3rem 0.6rem;
  }
  
  .header-container {
    min-height: 140px;
  }
}
</style>