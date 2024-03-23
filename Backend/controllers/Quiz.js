const QuizSchema = require("../models/QuizModel");

exports.addQuiz = async (req, res) => {
  const {
    quizid,
    name,
    grade,
    date,
    time,
    duration,
    subject,
    type,
    pattern,
    marks,
    questions,
    instructions,
  } = req.body;

  const quiz = QuizSchema({
    quizid,
    name,
    grade,
    date,
    time,
    duration,
    subject,
    type,
    pattern,
    marks,
    questions,
    instructions,
  });

  try {
    if (
      !quizid ||
      !name ||
      !date ||
      !time ||
      !grade ||
      !subject ||
      !duration ||
      !type ||
      !pattern ||
      !marks ||
      !questions ||
      !instructions
    ) {
      return res.status(400).json({ message: "Fill All Fields Properly" });
    }

    await quiz.save();
    res.status(200).json({ message: "quiz Added" });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Server Error aaya hai " });
  }
};

exports.GetQuiz = async (req, res) => {
  try {
    // console.log("req query" , req.query)
    const resp = await QuizSchema.find({ grade: req.query.grade }).sort({
      createdAt: -1,
    });
    res.status(200).json(resp);
  } catch (err) {
    res.status(500).json({ message: "Some Error Occured" });
  }
};

exports.getQuizData = async (req, res) => {
  try {
    console.log("req query", req.query);
    const resp = await QuizSchema.find({ quizid: req.query.quizid }).sort({
      createdAt: -1,
    });
    res.status(200).json(resp);
  } catch (err) {
    res.status(500).json({ message: "Some Error Occured" });
  }
};
