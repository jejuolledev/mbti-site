#!/bin/bash

# MBTI Site GitHub 배포 스크립트

echo "🚀 MBTI Site GitHub 배포를 시작합니다..."

cd /Users/baejeong-gil/Desktop/ZZB-Labs/webs/mbti-site

# Git 초기화 (이미 초기화되어 있으면 무시됨)
if [ ! -d ".git" ]; then
    echo "📦 Git 저장소 초기화 중..."
    git init
    git branch -M main
fi

# 원격 저장소 확인 및 추가
if ! git remote | grep -q 'origin'; then
    echo "🔗 원격 저장소 연결 중..."
    git remote add origin https://github.com/jejuolledev/mbti-site.git
fi

# 모든 파일 추가
echo "📝 파일 추가 중..."
git add .

# 커밋
echo "💾 커밋 생성 중..."
git commit -m "🎉 Complete MBTI site project - Full source code"

# GitHub에 푸시
echo "⬆️  GitHub에 푸시 중..."
git push -u origin main --force

echo ""
echo "✅ 배포 완료!"
echo "🌐 저장소: https://github.com/jejuolledev/mbti-site"
echo ""
echo "📌 다음 단계:"
echo "1. https://github.com/jejuolledev/mbti-site/settings/pages"
echo "2. Source를 'GitHub Actions'로 설정"
echo "3. 자동 배포 시작!"
echo ""
