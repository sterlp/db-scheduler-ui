import { Box } from '@chakra-ui/react';
import { NumberCircle } from 'src/components/NumberCircle';

interface StatusBoxProps {
  status: string;
  consecutiveFailures: number;
}

const statusColors: Record<
  string,
  { borderColor: string; backgroundColor: string; color: string }
> = {
  Failed: {
    borderColor: '#BB0101',
    backgroundColor: '#EFC2C2',
    color: '#BB0101',
  },
  Running: {
    borderColor: '#DAE2F6',
    backgroundColor: '#DAE2F6',
    color: '#000000',
  },
  Scheduled: {
    borderColor: '#F1F2F5',
    backgroundColor: '#F1F2F5',
    color: '#000000',
  },
  Group: {
    borderColor: '#121212',
    backgroundColor: '#FFFFFF',
    color: '#000000',
  },
};

export const StatusBox: React.FC<StatusBoxProps> = ({
  status,
  consecutiveFailures,
}) => {
  const statusInfo =
    status === 'Group' && consecutiveFailures > 0
      ? statusColors['Failed']
      : statusColors[status] || statusColors['Scheduled'];
  const { borderColor, backgroundColor, color } = statusInfo;

  return (
    <Box
      borderRadius={4}
      mr={4}
      width={115}
      borderColor={borderColor}
      backgroundColor={backgroundColor}
      color={color}
      px={4}
      py={1}
      borderWidth={1}
      position="relative"
      borderStyle={status !== 'Group' ? 'solid' : 'dashed'}
    >
      {consecutiveFailures > 0 && status !== 'Group' ? (
        <NumberCircle
          number={consecutiveFailures}
          bgColor={'#BB0101'}
          transform={'translate(50%, -50%)'}
        ></NumberCircle>
      ) : (
        <></>
      )}

      {status}
    </Box>
  );
};
