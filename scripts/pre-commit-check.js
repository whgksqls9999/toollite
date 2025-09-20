#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

console.log('🔍 빌드 에러 체크를 시작합니다...');

try {
	// 1. TypeScript 타입 체크
	console.log('🔧 TypeScript 타입 체크 중...');
	execSync('npx tsc --noEmit', {
		stdio: 'inherit',
		cwd: process.cwd(),
	});
	console.log('✅ TypeScript 타입 체크 통과');

	// 2. 빌드 테스트
	console.log('🏗️ 빌드 테스트 중...');
	execSync('npm run build', {
		stdio: 'inherit',
		cwd: process.cwd(),
	});
	console.log('✅ 빌드 테스트 통과');

	console.log('🎉 모든 체크가 완료되었습니다. commit을 진행합니다.');
	process.exit(0);
} catch (error) {
	// 실패 시에만 경고창 표시
	console.error('❌ 빌드 에러가 발견되었습니다. commit이 취소됩니다.');
	console.error('   에러를 확인하고 수정한 후 다시 commit해주세요.');

	process.exit(1);
}
