import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import ContactThumbnail from '../components/ContactThumbnail';
import colors from '../utility/colors';
import { fetchContacts } from '../utility/Api';  // Đổi từ fetchUserContact thành fetchContacts

const User = () => {
    const [user, setUser] = useState({}); // Sử dụng đối tượng thay vì mảng
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // Load dữ liệu
    useEffect(() => {
        fetchContacts() // Đổi tên hàm gọi API cho đồng bộ
            .then(users => {
                setUser(users[0] || {}); // Chỉ lấy user đầu tiên từ danh sách
                setLoading(false);
                setError(false);
            })
            .catch(e => {
                setLoading(false);
                setError(true);
            });
    }, []);

    const { avatar, name, phone } = user;

    return (
        <View style={styles.container}>
            {loading && <ActivityIndicator size="large" />}
            {error && <Text>Error...</Text>}
            {!loading && !error && user && (
                <ContactThumbnail avatar={avatar} name={name} phone={phone} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.blue,
    },
});

export default User;
