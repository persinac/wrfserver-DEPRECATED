import {
	Column,
	Connection
} from 'typeorm';
import {Question} from '../entity/Question';

export class QuestionController extends Question {

	constructor(catObj: QuestionController) {
		super();
		const {
			q_id = null,
			text = '',
			short_name = '',
			topic = '',
			tooltip = '',
			instructions = '',
			datatype = '',
			is_active = null,
			created_by = '',
			created_on = null,
			updated_by = '',
			updated_on = null
		} = catObj;
		this.q_id = q_id;
		this.text = text;
		this.short_name = short_name;
		this.topic = topic;
		this.tooltip = tooltip;
		this.instructions = instructions;
		this.datatype = datatype;
		this.is_active = is_active;
		this.created_by = created_by;
		this.created_on = created_on;
		this.updated_by = updated_by;
		this.updated_on = updated_on;
	}

	public toQuestion(): Question {
		const question: Question = new Question();
		question.q_id = this.q_id;
		question.text = this.text;
		question.short_name = this.short_name;
		question.topic = this.topic;
		question.tooltip = this.tooltip;
		question.instructions = this.instructions;
		question.datatype = this.datatype;
		question.is_active = this.is_active;
		question.created_by = this.created_by;
		question.created_on = this.created_on;
		question.updated_by = this.updated_by;
		question.updated_on = this.updated_on;
		return question;
	}

	public static async retrieveQuestionById(conn: Connection, question_id: number): Promise<QuestionController> {
		return conn.getRepository(Question).createQueryBuilder('questions')
			.where({ q_id: question_id })
			.getOne()
			.then((question) => {
				if (question) {
					return new QuestionController(question as QuestionController);
				} else {
					return Promise.reject(new Error('Question ID [' + question_id + '] does not exist.'));
				}
			});
	}
}
