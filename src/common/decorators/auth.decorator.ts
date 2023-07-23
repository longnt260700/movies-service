import { SetMetadata } from '@nestjs/common';
import { SPEC_KEY } from 'src/constants/base.constant';
import { UserType } from 'src/enums';

export const Auth = (specs: UserType[], isOnly = false) => SetMetadata(SPEC_KEY, { specs, isOnly });
