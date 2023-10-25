const asyncHandler = require('../middleware/asyncHandler');
const generateToken = require('../utils/generateToken');
const User = require('../models/userModel');

// @desc Auth user & get token
// @route POST /api/users/auth
// @access public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        generateToken(res, user._id);

        res.json({
            _id: user._id,
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            isAdmin: user.isAdmin,
            canvasid: user.canvasid,
            bio: user.bio,
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
});

// @desc Register a new user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    const { username, firstname, lastname, email, password, isAdmin, canvasid, bio } = req.body;
    console.log( "CANVAS ID " + canvasid );

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    const user = await User.create({
        username,
        firstname,
        lastname,
        email,
        password,
        isAdmin,
        canvasid,
        bio
    });

    user.save();

    if (user) {
        res.status(201).json({
            _id: user._id,
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            isAdmin: user.isAdmin,
            canvasid: user.canvasid,
            bio: user.bio,
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});

// @desc Logout user / clear cookie
// @route POST /api/users/logout
// @access Public
const logoutUser = (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0),
        sameSite: 'None',
        secure: true,
    });
    res.status(200).json({ message: 'Logged out successfully' });
};

// @desc Get user profile
// @route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        res.json({
            _id: user._id,
            username: user.username,
            email: user.email,
            bio: user.bio,
        });
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});

// @desc Update user profile
// @route PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        user.username = req.body.username || user.username;
        user.firstname = req.body.firstname || user.firstname;
        user.lastname = req.body.lastname || user.lastname;
        user.email = req.body.email || user.email;
        user.isAdmin = req.body.isAdmin || user.isAdmin;
        user.canvasid = req.body.canvasid || user.canvasid;
        user.bio = req.body.bio || user.bio;

        const updatedUser = await user.save();

        res.json({
            _id: updatedUser._id,
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            canvasid: updatedUser.canvasid,
            bio: updatedUser.bio,
        });
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});

// @desc Get all users
// @route GET /api/users
// @access Private/Admin
const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find({});
    res.json(users);
});

// @desc Delete user
// @route DELETE /api/users/:id
// access Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    if (user) {
        await User.deleteOne({ _id: user._id });
        res.json({ message: 'User removed' });
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});

// @desc Get user by ID
// @route GET /api/users/:id
// @access Private/Admin
const getUserById = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id).select('-password');

    if (user) {
        res.json(user);
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private
const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);

    if (user) {
        user.username = req.body.username || user.username;
        user.firstname = req.body.firstname || user.firstname;
        user.lastname = req.body.lastname || user.lastname;
        user.email = req.body.email || user.email;
        user.isAdmin = req.body.isAdmin || user.isAdmin;
        user.canvasid = req.body.canvasid || user.canvasid;
        user.bio = req.body.bio || user.bio;

        if (req.body.password) {
            user.password = req.body.password;
        }

        const updatedUser = await user.save();

        res.json({
            _id: updatedUser._id,
            username: updatedUser.username,
            firstname: updatedUser.username,
            firstname: updatedUser.lastname,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            canvasid: updatedUser.canvasid,
            bio: updatedUser.bio,
        });
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});

module.exports = {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUser,
};
