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
    stage('Deploy') {
      steps {
        sh 'aws s3 sync $WORKSPACE/www s3://of-jenkins-test/ --delete'
      }
    }
  }
  environment {
    ci = 'true'
    HOME = '.'
  }
}