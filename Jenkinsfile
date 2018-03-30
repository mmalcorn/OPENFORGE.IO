pipeline {
  agent {
    docker {
      image 'node:8.10.0-alpine'
      args '-v $HOME/userContent/main-website:/www'
    }
    
  }
  stages {
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
  }
  environment {
    ci = 'true'
    HOME = '.'
  }
}