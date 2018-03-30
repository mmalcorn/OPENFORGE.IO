pipeline {
  agent any
  stages {
    stage('Install') {
      agent {
        docker {
          image 'node:8-alpine'
        }
        
      }
      environment {
        HOME = '.'
      }
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
}