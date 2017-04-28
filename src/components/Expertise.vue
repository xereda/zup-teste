<template>
  <div class="columns is-multiline">
    <div class="column is-3" v-for="card in cards">
      <jmob-card :image="card.image"
                 :title="card.title"
                 :anchor-name="card.anchorName"
                 :lazy-time="card.lazyTime"
                 :content="card.content"></jmob-card>
    </div>
  </div>
</template>

<script>
import JmobCard from './Card.vue'
export default {
  data () {
    return {
      cards: [
        {
          image: '../static/images/fita.jpg',
          anchorName: 'atelie',
          lazyTime: 150,
          title: 'Ateliê de Software',
          content: `<p>Seja para um smartphone, tablet ou browser, desenvolvemos soluções baseadas na junção das melhores ferramentas e metodologias de
                   desenvolvimento de software. Nosso objetivo é atender as demandas, criando <strong>produtos digitais flexíveis e escaláveis</strong>, oferecendo
                   autonomia e independência para sua empresa. </p>
                   <p>Nossos projetos de softwares são conduzidos em parceria e num relacionamento transparente.
                   Adotamos uma <strong>metodologia ágil</strong>, onde a definição de escopo é constantemente validada e com <strong>entregas fracionadas</strong>.
                   Um formato que acreditamos ser um modelo mais efetivo para garantir tão logo o <strong>retorno do investimento</strong>.</p>`
        },
        {
          image: '../static/images/js.svg',
          anchorName: 'javascript',
          lazyTime: 300,
          title: 'Javascript',
          content: `<p>Somos especialistas em tecnologias baseadas em <strong>javascript</strong>, tanto no frontend como no backend.</p>
                    <p>Sempre que possível, adotamos o javascript a fim de uniformizar e simplificar o desenvolvimento.
                    O javascript é poderoso a ponto de deixar sua aplicação acessível, com codificação clara e fácil de <strong>escalar</strong>.</p>
                    <p>Embora nosso foco seja o javascript, também atuamos com expertise em outras tecnologias. </p>`
        },
        {
          image: '../static/images/tela.jpg',
          anchorName: 'knowhow',
          lazyTime: 350,
          title: 'Know-how',
          content: `<p><strong>Frontend</strong></p>
                    <p>
                    <ul>
                      <li>Javascript / Ecmascript 6+</li>
                      <li>HTML / CSS</li>
                      <li>Bulma CSS</li>
                      <li>Material Design</li>
                      <li>Metodologia Flexbox</li>
                      <li>Sites Responsivos</li>
                      <li>SPA - Single Page Application</li>
                      <li>VueJS</li>
                      <li>Quasar Framework</li>
                      <li>AngularJS</li>
                      <li>Ionic Framework</li>
                    </ul>
                    </p>

                    <p><strong>Backend</strong></p>
                    <p>
                    <ul>
                      <li>Node.js / Express</li>
                      <li>PHP / Laravel</li>
                      <li>Restful API</li>
                      <li>MongoDB</li>
                      <li>Mysql / Oracle / Postgresql</li>
                    </ul>
                    </p>`
        },
        {
          image: '../static/images/cubo.jpg',
          anchorName: 'atuacao',
          lazyTime: 450,
          title: 'Atuação',
          content: `<ul>
            <li>Consultoria para startups</li>
            <li>Aplicações mobile</li>
            <li>Aplicações web</li>
            <li>Sites e blogs</li>
            <li>Landing pages</li>
          </ul>`
        }
      ]
    }
  },
  components: {
    JmobCard
  }
}
</script>

<style lang="css">
</style>
