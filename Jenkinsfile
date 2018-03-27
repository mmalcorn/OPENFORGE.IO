pipeline {
  agent {
    docker {
      image 'node:8.10.0-alpine'
      args '-v $HOME/userContent/$JOB_NAME:/'
    }
    
  }
  stages {
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }
    stage('Build') {
      parallel {
        stage('Build') {
          steps {
            sh 'npm run build'
          }
        }
        stage('Test') {
          steps {
            sh 'npm test'
          }
        }
      }
    }
  }
  environment {
    ci = 'true'
    HOME = '.'
  }
}