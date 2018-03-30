pipeline {
  agent none
  stages {
    stage('Test & Build') {
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
        sh 'npm test'
        sh 'npm run build'
      }
    }
    stage('Deploy') {
      agent any
      steps {
        sh 'aws s3 sync $WORKSPACE/www s3://of-jenkins-test/ --delete'
      }
    }
  }
  environment {
    CI = 'true'
  }
}