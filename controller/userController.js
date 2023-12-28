const User_info = require('../model/user_info');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User_info.findAll();
        // 로깅: 사용자 요청 로깅
        console.log(`GET /users - ${users.length} users retrieved`);
        
        // 표준화된 응답 형태
        const formattedUsers = users.map(user => ({
            id: user.id,
            username: user.username,
            // 필요한 다른 필드들 추가
        }));

        res.json(formattedUsers);
    } catch (error) {
        // 에러 핸들링: 에러 로깅 및 클라이언트 응답
        console.error('Error retrieving users:', error);
        res.status(500).json({ error: 'Failed to retrieve users' });
    }
};